export default class AnimationSystem {

    constructor() {
        this.updates = [];
    }


    addUpdate(update) {
        this.updates.push(update);
    }


    step(tpf) {
        for (var i in this.updates) {
            this.updates[i](tpf);
        }
    }


    start() {
        if (!this.isPlaying) {

            this.isPlaying = true;

            var oldTime = Date.now(),
                newTime = null;

            var animate = function () {

                if (this.isPlaying) {

                    newTime = Date.now();
                    this.step(newTime - oldTime);
                    requestAnimationFrame(animate);
                    oldTime = newTime;

                }

            }.bind(this);

            animate();
        }
    }


    stop() {
        this.isPlaying = false;
    }
}
