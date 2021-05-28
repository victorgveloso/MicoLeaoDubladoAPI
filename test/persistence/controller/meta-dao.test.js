const metaStub = require('../../../src/persistence/models/stub/meta.json');
const MetaDAO = require('../../../src/persistence/controllers/meta-dao').default;
var metaDAO;


beforeAll(() => {
    metaDAO = new MetaDAO();
});
it('Should insert when upsert a meta with new id', async () => {
    const addSpy = jest.spyOn(metaDAO, "add").mockImplementation(() => {});
    const updateSpy = jest.spyOn(metaDAO, "update").mockImplementation(() => {});
    const getIdSpy = jest.spyOn(metaDAO, "getById").mockImplementation((id) => Promise.resolve(null));
    metaDAO.getById.bind(metaDAO);

    await metaDAO.upsert(metaStub);

    expect(addSpy).toBeCalledTimes(1);
    expect(addSpy).toBeCalledWith(metaStub);
    expect(getIdSpy).toBeCalledTimes(1);
    expect(getIdSpy).toBeCalledWith(metaStub.id);
    expect(updateSpy).not.toBeCalled();

    addSpy.mockRestore();
    updateSpy.mockRestore();
    getIdSpy.mockRestore();
});
it('Should update when upsert a meta with known id', async () => {
    const addSpy = jest.spyOn(metaDAO, "add").mockImplementation(() => {});
    const updateSpy = jest.spyOn(metaDAO, "update").mockImplementation(() => {});
    const getIdSpy = jest.spyOn(metaDAO, "getById").mockImplementation((id) => Promise.resolve(metaStub));
    metaDAO.getById.bind(metaDAO);

    await metaDAO.upsert(metaStub);

    expect(updateSpy).toBeCalledTimes(1);
    expect(updateSpy).toBeCalledWith(metaStub);
    expect(getIdSpy).toBeCalledTimes(1);
    expect(getIdSpy).toBeCalledWith(metaStub.id);
    expect(addSpy).not.toBeCalled();

    addSpy.mockRestore();
    updateSpy.mockRestore();
    getIdSpy.mockRestore();
});