export function animateWithTPF(callback) {
    let isRunning = true, oldTime = Date.now(), newTime;
    function next() {
        if (isRunning) {
            newTime = Date.now();
            callback(newTime - oldTime);
            oldTime = newTime;
            requestAnimationFrame(next);
        }
    }
    next();
    return function stopAnimation() {
        isRunning = false;
    };
}
export function animate(callback) {
    let isRunning = true;
    function next() {
        if (isRunning) {
            callback();
            requestAnimationFrame(next);
        }
    }
    next();
    return function stopAnimation() {
        isRunning = false;
    };
}
export function animator(animateFunction) {
    let updates = [];
    function callback() {
        for (let i in updates) {
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
        }
    };
}
//# sourceMappingURL=animation.js.map