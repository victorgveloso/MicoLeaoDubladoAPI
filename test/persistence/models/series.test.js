const Stream = require("../../../src/persistence/models/stream").default;
describe("Given a series",()=>{
    let series;
    beforeEach(()=>{
        series = new Stream({metaId: "tt9140560", type: "series", title: "WandaVision", episode: 1, season: 1});
    })
    it("Should contain episode and season specified in its stream id", () => {
        expect(series.streamId).toEqual(`${series.metaId}:${series.episode}:${series.season}`);
    })
})