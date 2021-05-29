var mongoose = require('mongoose');
const disassemble = require('../../../src/persistence/controllers/series-assembler').default;
const {
    connect
} = require('../../../src/config');
const series = require('../../../src/persistence/models/stub/series.json');
const Stream = require('../../../src/persistence/models/stream').default;
const Meta = require('../../../src/persistence/models/meta').default;
const MetaDao = require('../../../src/persistence/controllers/meta-dao').default;
const StreamDao = require('../../../src/persistence/controllers/stream-dao').default;
const metaDao = new MetaDao(), streamDao = new StreamDao();

jest.retryTimes(5);

describe('When a series is disassembled', () => {
    
    beforeAll(async () => {
        await connect();
        await Stream.deleteMany({}).exec();
        await Meta.deleteMany({}).exec();
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
        } = disassemble(series);

        await metaDao.add(meta);
        await streamDao.addIfAbsent(streams[0]);
    });

    it('Should be in the meta collection', async () => {
        console.log(await metaDao.getAll());
    });
    it("Should contain all attributes on series' meta", async () => {
        var meta = await metaDao.getById(series.meta.id);

        for (const prop in series.meta) {
            expect(meta).toHaveProperty(prop);
        }
    });
    it('Should be in the stream collection', async () => {
        let streamId = `${series.meta.id}:${series.magnets[0].season}:${series.magnets[0].episode}`;
        var stream = (await streamDao.getByStreamId(streamId))[0];

        var hostnamePattern = /\w+:\/\/(.*?)[:/]?.*/g;

        expect(series.magnets[0].magnet).toContain(stream.infoHash);
        for (i of stream.sources) {
            expect(series.magnets[0].magnet).toContain(i.replace(hostnamePattern, '$1'));
        }
        expect(stream.metaId).toEqual(series.meta.id);
        expect(stream.streamId).toEqual(streamId);
        expect(stream.title).toEqual(series.magnets[0].title);
        expect(stream.season).toEqual(series.magnets[0].season);
        expect(stream.episode).toEqual(series.magnets[0].episode);
        expect(stream.fileIdx).toEqual(series.magnets[0].fileIdx);
        expect(stream.seeders).toEqual(series.magnets[0].seeders);
        expect(stream.size).toEqual(series.magnets[0].size);
    });
});