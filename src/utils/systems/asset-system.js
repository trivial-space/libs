goog.provide('ts.utils.systems.AssetSystem');
goog.provide('ts.utils.systems.AssetSystem.Constants');
goog.provide('ts.utils.systems.AssetSystem.Asset');
goog.provide('ts.utils.systems.AssetSystem.TextAsset');

goog.require('ts.utils.systems.EntitySystem');
goog.require('goog.events.EventTarget');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
goog.require('goog.object');


/**
 * @constructor
 * @param entitySystem {ts.utils.systems.EntitySystem}
 * @extends {goog.events.EventTarget}
 */
ts.utils.systems.AssetSystem = function(entitySystem) {
    ts.utils.systems.AssetSystem.base(this, 'constructor');
    this.assets = {};
    this.entitySystem = entitySystem;
};
goog.inherits(ts.utils.systems.AssetSystem, goog.events.EventTarget);


ts.utils.systems.AssetSystem.Constants = {};
/**
 * @enum {string}
 */
ts.utils.systems.AssetSystem.Constants.Status = {
    PENDING: 'pending',
    READY: 'ready'
};


/**
 * @enum {string}
 */
ts.utils.systems.AssetSystem.Constants.Type = {
    TEXT: 'text'
};


/**
 * @constructor
 * @extends {goog.events.EventTarget}
 */
ts.utils.systems.AssetSystem.Asset = function(id, path, type) {
    ts.utils.systems.AssetSystem.Asset.base(this, 'constructor');
    this.id = id;
    this.path = path;
    this.type = type;
    this.value = null;
    this.status = ts.utils.systems.AssetSystem.Constants.Status.PENDING;
};
goog.inherits(ts.utils.systems.AssetSystem.Asset, goog.events.EventTarget);


/**
 * @constructor
 * @extends {ts.utils.systems.AssetSystem.Asset}
 */
ts.utils.systems.AssetSystem.TextAsset = function(id, path) {
    ts.utils.systems.AssetSystem.Asset.call(this, id, path,
        ts.utils.systems.AssetSystem.Constants.Type.TEXT);
};
goog.inherits(ts.utils.systems.AssetSystem.TextAsset,
              ts.utils.systems.AssetSystem.Asset);


goog.scope(function() {

    var AssetSystem = ts.utils.systems.AssetSystem,
        Asset = AssetSystem.Asset,
        TextAsset = AssetSystem.TextAsset,
        consts = ts.utils.systems.AssetSystem.Constants,
        obj = goog.object,
        EventType = goog.net.EventType;


    // ===== Asset methods =====

    Asset.prototype.complete = function(value) {
        this.value = value;
        this.status = consts.Status.READY;
        this.dispatchEvent(EventType.COMPLETE);
    };


    Asset.prototype.error = function() {
        this.dispatchEvent(EventType.ERROR);
    };


    // ===== TextAsset methods =====

    TextAsset.prototype.load = function() {
        var self = this;
        this.status = consts.Status.PENDING;
        goog.net.XhrIo.send(
            this.path,
            function() {
                var res = this.getResponseText();
                if (res) {
                    self.complete(res);
                } else {
                    self.error();
                }
            }
        );
    };


    // ===== AssetSystem methods =====


    /**
     * @param entitySystem {ts.utils.systems.EntitySystem}
     */
    AssetSystem.prototype.addEntitySystem = function(entitySystem) {
        this.entitySystem = entitySystem;
    };


    AssetSystem.prototype.addText = function(id, path) {
        this.assets[id] = new TextAsset(id, path);
    };


    AssetSystem.prototype.addTexts = function(texts) {
        var id, path;
        for (id in texts) {
            path = texts[id];
            this.addText(id, path);
        }
    };


    AssetSystem.prototype.addAssets = function(assets) {
        if (assets.texts) {
            this.addTexts(assets.texts);
        }
    };


    AssetSystem.prototype.load = function() {
        var self = this;

        this.completed = 0;
        this.total = obj.getCount(this.assets);

        obj.forEach(this.assets, function(asset) {
            asset.removeAllListeners();
            asset.load();
            asset.listen(EventType.COMPLETE, function() {
                self.completed++;
                self.dispatchEvent(EventType.PROGRESS);
                if (self.completed === self.total) {
                    self.updateEntities();
                    self.dispatchEvent(EventType.COMPLETE);
                }
            });
        });
    };


    AssetSystem.prototype.updateEntity = function(id) {
        var asset = this.assets[id];
        if (asset && this.entitySystem &&
            asset.status === consts.Status.READY) {
            this.entitySystem.resetEntity(id, asset.value);
        }
    };


    AssetSystem.prototype.updateEntities = function() {
        for (var id in this.assets) {
            this.updateEntity(id);
        }
    };


    AssetSystem.prototype.reload = function(id) {
        var asset = this.assets[id],
            self = this;

        if (asset) {
            asset.removeAllListeners();
            asset.load();
            asset.listen(EventType.COMPLETE, function() {
                self.updateEntity(id);
            });
        }
    };
});
