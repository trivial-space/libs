goog.provide('tslibs.systems.AnimationSystem');


/**
 * @constructor
 */
tslibs.systems.AnimationSystem = function() {
    this.updates = [];
};


goog.scope(function() {

    var AnimationSystem = tslibs.systems.AnimationSystem;


    AnimationSystem.prototype.addUpdate = function(update) {
        this.updates.push(update);
    };


    AnimationSystem.prototype.step = function(tpf) {
        for (var i in this.updates) {
            this.updates[i](tpf);
        }
    };


    AnimationSystem.prototype.start = function() {
        if (!this.isPlaying) {

            this.isPlaying = true;

            var oldTime = Date.now(),
            newTime = null;

            var animate = function() {

                if (this.isPlaying) {

                    newTime = Date.now();
                    this.step(newTime - oldTime);
                    requestAnimationFrame(animate);
                    oldTime = newTime;

                }

            }.bind(this);

            animate();
        }
    };


    AnimationSystem.prototype.stop = function() {
        this.isPlaying = false;
    };
});
