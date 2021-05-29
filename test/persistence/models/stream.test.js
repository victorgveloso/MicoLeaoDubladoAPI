var mongoose = require('mongoose');
const Stream = require('../../../src/persistence/models/stream').default;
const streamStub = require('../../../src/persistence/models/stub/stream.json');
const {
    connect
} = require('../../../src/config');

jest.retryTimes(5);
describe("Given a stream stub", ()=>{
    beforeAll(async () => {
        await connect();
    });
    afterAll(async () => {
        await mongoose.disconnect();
    });
    afterEach(async () => {
        await Stream.deleteMany({}).exec();
    });
    
    test('Test model(e.g. stream) creation', () => {
        var stream = new Stream(streamStub);
    
        var sources = Array.from(stream.sources);
    
        return expect({
                metaId: stream.metaId,
                streamId: stream.metaId,
                seeders: stream.seeders,
                infoHash: stream.infoHash,
                title: stream.title,
                size: stream.size,
                sources,
                type: stream.type
            })
            .toEqual(streamStub);
    });
    
    
    
    it('Should return simple object when saved', async () => {
        var stream = new Stream(streamStub);
    
        const output = await stream.save();
    
        expect(output).toHaveProperty('_id');
        expect(output).toHaveProperty('__v');
    });
    
    it('Should be found after saving', async () => {
        var s = new Stream(streamStub);
    
        var saved = await s.save();
    
        var found = await Stream.findOne({
            infoHash: streamStub.infoHash
        }).exec();
    
        expect(found._id).toEqual(saved._id);
        expect(found.title).toEqual(saved.title);
        expect(Array.from(found.sources)).toEqual(Array.from(saved.sources));
    });
});

describe("Given a series",()=>{
    let series;
    beforeEach(()=>{
        series = new Stream({metaId: "tt9140560", type: "series", title: "WandaVision", episode: 1, season: 1});
    })
    it("Should contain episode and season specified in its stream id", () => {
        expect(series.streamId).toEqual(`${series.metaId}:${series.episode}:${series.season}`);
    })
})