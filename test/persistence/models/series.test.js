const SeriesStreamModel = require("../../../src/persistence/models/series").default;

describe("Given a series",()=>{
    let series;
    beforeEach(()=>{
        series = new SeriesStreamModel({metaId: "tt9140560", episode: 1, season: 1});
    })
    it("Should contain episode and season specified in its stream id", () => {
        expect(series.streamId).toEqual(`${series.metaId}:${series.episode}:${series.season}`);
    })
})