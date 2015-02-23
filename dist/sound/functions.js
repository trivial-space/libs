// Generated by github.com/steida/coffee2closure 0.1.9
define(function() {
  return {
    withAudioContext: function(success, error) {
      var context;
      context = null;
      if (typeof AudioContext !== "undefined") {
        context = new AudioContext();
      } else if (typeof webkitAudioContext !== "undefined") {
        context = new webkitAudioContext();
      }
      if (context) {
        return success(context);
      } else {
        return typeof error === "function" ? error() : void 0;
      }
    },
    loadSounds: function(context, urlList, success, error) {
      var bufferList, e, i, index, len, loadBuffer, loadCount, results, url;
      bufferList = new Array();
      loadCount = 0;
      loadBuffer = function(url, index) {
        var request;
        request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.responseType = "arraybuffer";
        request.onload = function() {
          return context.decodeAudioData(request.response, (function(buffer) {
            if (!buffer) {
              throw Error("error decoding file data: " + url);
            }
            bufferList[index] = buffer;
            if (++loadCount === urlList.length) {
              return success(bufferList);
            }
          }), function() {
            throw Error("decodeAudioData error");
          });
        };
        request.onerror = function() {
          throw Error("SoundLoader: XHR error");
        };
        return request.send();
      };
      try {
        results = [];
        for (index = i = 0, len = urlList.length; i < len; index = ++i) {
          url = urlList[index];
          results.push(loadBuffer(url, index));
        }
        return results;
      } catch (_error) {
        e = _error;
        console.error(e);
        return typeof error === "function" ? error(e) : void 0;
      }
    },
    source: function(buffer, context) {
      var sound;
      sound = context.createBufferSource();
      sound.buffer = buffer;
      return sound;
    }
  };
});