const Manifest = require('../models/manifest');

class ManifestDAO{
    async get(){
        let result = await Manifest.findOne().exec();
        if (result === null) {
            result = this.add(require('../models/stub/manifest.json'));
        }
        return result;
    }
    async add(manifest){
        return (new Manifest(manifest)).save();
    }
}

module.exports = ManifestDAO;