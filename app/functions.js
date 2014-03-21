if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function(otherString){
            return str + ', ' + otherString;
        }
    },

    makeClosures : function(arr, fn) {
        var array = [];

        var createFunction = function(val) {
          return function() {
            return fn(val);
            };
        };

        for (var i = 0, len = arr.length; i < len; i++) {
          array.push(createFunction(arr[i]));
        }

        return array;
    },

    partial : function(fn, str1, str2) {

    },

    useArguments : function() {

    },

    callIt : function(fn) {

    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});
