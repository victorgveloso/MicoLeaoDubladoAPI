var mongoose = require('mongoose');
const disassemble = require('../../../src/persistence/controllers/movie-assembler').default;
const MetaDao = require('../../../src/persistence/controllers/meta-dao').default;
const StreamDao = require('../../../src/persistence/controllers/stream-dao').default;
const Stream = require('../../../src/persistence/models/stream').default;
const Meta = require('../../../src/persistence/models/meta').default;
const {
    connect
} = require('../../../src/config');
const movie = require('../../../src/persistence/models/stub/movie.json');
const metaDao = new MetaDao(), streamDao = new StreamDao();

jest.retryTimes(5);

describe('When a movie is disassembled', () => {
    beforeAll(async () => {
        await connect();
    });
    afterAll(async () => {
        await mongoose.disconnect();
    });
    afterEach(async () => {
        await Stream.deleteMany({}).exec();
        await Meta.deleteMany({}).exec();
    });
    beforeEach(async () => {
        var {
            meta,
            streams
        } = disassemble(movie);

        await metaDao.add(meta);
        await streamDao.addIfAbsent(streams[0]);
    });

    it('Should be in the meta collection', async () => {
        console.log(await metaDao.getAll());

    });
    it("Should contain all attributes on movie's meta", async () => {
        var meta = await metaDao.getById(movie.meta.id);

        for (const prop in movie.meta) {
            expect(meta).toHaveProperty(prop);
        }
    });
    it('Should be in the stream collection', async () => {
        var stream = (await streamDao.getByStreamId(movie.meta.id))[0];

        var hostnamePattern = /\w+:\/\/(.*?)[:/]?.*/g;

        expect(movie.magnets[0].magnet).toContain(stream.infoHash);
        for (i of stream.sources) {
            expect(movie.magnets[0].magnet).toContain(i.replace(hostnamePattern, '$1'));
        }
        expect(stream.metaId).toEqual(movie.meta.id);
        expect(stream.title).toEqual(movie.magnets[0].title);
        expect(stream.seeders).toEqual(movie.magnets[0].seeders);
        expect(stream.size).toEqual(movie.magnets[0].size);
    });
});