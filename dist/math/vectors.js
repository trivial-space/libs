// Generated by github.com/steida/coffee2closure 0.1.9
goog.provide('tslibs.math.vectors');
goog.scope(function() {
  var fns;
  fns = tslibs.math.vectors;
  fns.add = function(vec1, vec2) {
    var i, j, ref, results;
    results = [];
    for (i = j = 0, ref = vec1.length - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
      results.push(vec1[i] + vec2[i]);
    }
    return results;
  };
  fns.addScalar = function(vec, scalar) {
    var i, j, len, results;
    results = [];
    for (j = 0, len = vec.length; j < len; j++) {
      i = vec[j];
      results.push(i + scalar);
    }
    return results;
  };
  fns.sub = function(vec1, vec2) {
    var i, j, ref, results;
    results = [];
    for (i = j = 0, ref = vec1.length - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
      results.push(vec1[i] - vec2[i]);
    }
    return results;
  };
  fns.subScalar = function(vec, scalar) {
    var i, j, len, results;
    results = [];
    for (j = 0, len = vec.length; j < len; j++) {
      i = vec[j];
      results.push(i - scalar);
    }
    return results;
  };
  fns.mul = function(vec, scalar) {
    var j, len, results, val;
    results = [];
    for (j = 0, len = vec.length; j < len; j++) {
      val = vec[j];
      results.push(val * scalar);
    }
    return results;
  };
  fns.div = function(vec, scalar) {
    var j, len, results, val;
    if (scalar) {
      results = [];
      for (j = 0, len = vec.length; j < len; j++) {
        val = vec[j];
        results.push(val / scalar);
      }
      return results;
    }
  };
  fns.length = function(vec) {
    var j, len, sum, val;
    sum = 0;
    for (j = 0, len = vec.length; j < len; j++) {
      val = vec[j];
      sum += val * val;
    }
    return Math.sqrt(sum);
  };
  fns.normalize = function(vec) {
    return fns.div(vec, fns.length(vec));
  };
  fns.limit = function(vec, maxLenght) {
    if (maxLenght < fns.length(vec)) {
      return fns.mul(fns.normalize(vec), maxLenght);
    } else {
      return vec;
    }
  };
  return fns.isEqual = function(vec1, vec2) {
    var equal, i, j, ref;
    equal = true;
    for (i = j = 0, ref = vec1.length - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
      if (vec1[i] !== vec2[i]) {
        equal = false;
      }
    }
    return equal;
  };
});