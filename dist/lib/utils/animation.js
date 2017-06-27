export function animateWithTPF(callback) {
    var isRunning = true;
    var oldTime;
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
    var isRunning = true;
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
export function animator(animateFunction) {
    var updates = [];
    function callback() {
        for (var i in updates) {
            updates[i].apply(null, arguments);
        }
    }
    return {
        start: function () {
            this.stop = animateFunction(callback);
        },
        stop: function () { },
        step: callback,
        addUpdate: function (update) {
            updates.push(update);
        },
        removeUpdate: function (update) {
            updates = updates.filter(function (u) { return u !== update; });
        }
    };
}
//# sourceMappingURL=animation.js.map