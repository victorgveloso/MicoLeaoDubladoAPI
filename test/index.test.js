var mongoose = require('mongoose');
const ManifestDAO = require('../src/persistence/controllers/manifest-dao').default;
const CatalogDAO = require('../src/persistence/controllers/catalog-dao').default;
const Manifest = require('../src/persistence/models/manifest').default;
const Catalog = require('../src/persistence/models/catalog').default;
const {
    addonBuilder
} = require('stremio-addon-sdk');
const {
    connect
} = require('../src/config');
const manifestStub = require('../src/persistence/models/stub/manifest.json');
const catalogStub = require('../src/persistence/models/stub/catalog.json');

var catalogDao, manifestDao, catalog, manifest;

jest.retryTimes(5);

describe('Given a manifest retrieved by mongo db', () => {
    beforeAll(async () => {
        await connect();

        catalogDao = new CatalogDAO();
        manifestDao = new ManifestDAO();
    });
    afterAll(async () => {
        await mongoose.disconnect();
    });
    beforeEach(async () => {
        catalog = await catalogDao.add(catalogStub);
        manifest = await manifestDao.add(manifestStub);
    });
    afterEach(async () => {
        await Manifest.deleteMany({}).exec();
        await Catalog.deleteMany({}).exec();
    });
    it('Should be accepted by addonBuilder', () => {
        const addon = addonBuilder(manifest);

        return expect(addon).toEqual(expect.objectContaining({
            defineCatalogHandler: expect.any(Function)
        }));
    });
});