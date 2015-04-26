import Promise from 'bluebird'
import simpleGet from '../net/helpers'


var Constants = {
    Type: {
        TEXT: 'text'
    }
};


class Asset {

    constructor(id, path, type) {
        this.id = id;
        this.path = path;
        this.type = type;
        this.value = null;
    }

    // simple basic load via get request
    load() {
        return simpleGet(this.path);
    }
}


class TextAsset extends Asset {

    constructor(id, path) {
        super(id, path, Constants.Type.TEXT);
    }

    load() {
        super.load().tap(text => this.value = text)
    }
}


export default class AssetSystem {

    constructor(entitySystem) {
        this.assets = {};
        this.entitySystem = entitySystem;
    }


    addEntitySystem(entitySystem) {
        this.entitySystem = entitySystem;
    }


    addText(id, path) {
        this.assets[id] = new TextAsset(id, path);
    }


    addTexts(texts) {
        for (let id in texts) {
            let path = texts[id];
            this.addText(id, path);
        }
    }


    addAssets(assets) {
        if (assets.text) {
            this.addTexts(assets.text);
        }
    }


    load(progressHandler) {
        const keys = Object.keys(this.assets);

        this.completed = 0;
        this.total = keys.length;

        return Promise.all(keys.map(key => {
            this.assets[key]
                .load()
                .tap(() => {
                    this.completed++;
                    progressHandler();
                });
        }));
    }


    updateEntity(id) {
        const asset = this.assets[id];
        if (asset && asset.value && this.entitySystem) {
            this.entitySystem.resetEntity(id, asset.value);
        }
    }


    updateEntities() {
        for (let id in this.assets) {
            this.updateEntity(id);
        }
    }


    reload(id) {
        const asset = this.assets[id];

        if (asset) {
            asset.load().then(() => this.updateEntity(id));
        }
    }
}


AssetSystem.Constants = Constants;
