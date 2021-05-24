var mongoose = require('mongoose');
const Stream = require('../../../src/persistence/models/stream').default;
const streamStub = require('../../../src/persistence/models/stub/stream.json');
const {
    connect
} = require('../../../src/config');

jest.retryTimes(5);

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
            infoHash: stream.infoHash,
            title: stream.title,
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