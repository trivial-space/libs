export function animateWithTPF(callback) {
    let isRunning = true;
    let oldTime;
    function next(newTime) {
        if (isRunning) {
            callback(newTime - (oldTime || newTime));
            oldTime = newTime;
            requestAnimationFrame(next);
        }
    }
    requestAnimationFrame(next);
    return function stopAnimation() {
        isRunning = false;
    };
}
export function animate(callback) {
    let isRunning = true;
    function next(time) {
        if (isRunning) {
            callback(time);
            requestAnimationFrame(next);
        }
    }
    requestAnimationFrame(next);
    return function stopAnimation() {
        isRunning = false;
    };
}
export function createAnimator(animateFunction = animateWithTPF) {
    let updates = [];
    function callback() {
        for (const i in updates) {
            updates[i].apply(null, arguments);
        }
    }
    return {
        start: function () {
            this.stop = animateFunction(callback);
        },
        stop: () => { },
        step: callback,
        addUpdate: function (update) {
            updates.push(update);
        },
        removeUpdate: function (update) {
            updates = updates.filter(u => u !== update);
        },
    };
}
//# sourceMappingURL=animation.js.map