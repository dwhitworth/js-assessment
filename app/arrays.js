if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++){

            sum += arr[i];
        }
        return sum;
    },

    remove : function(arr, item) {
        for (var i = 0; i < arr.length; i++){
            if (item == arr[i]){
            arr.splice(arr.indexOf(item), 1);
            }
        }
        return arr;
    },

    removeWithoutCopy : function(arr, item) {
        for (var i = 0; i < arr.length; i++){
            if (item == arr[i]){
            arr.splice(arr.indexOf(item), 2);
            }
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.splice(-1, 1);
        return arr;

    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.splice(0,1);
        return arr;
    },

    concat : function(arr1, arr2) {
        var arr3 = arr1.concat(arr2);
        return arr3;
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var count = 0;
        for (var i = 0; i < arr.length; i++){
            if (item == arr[i]){
                count += 1;
            }
        }
        return count;
    },

    duplicates : function(arr) {
      var counter = {};
      var duparray = [];

      for (var i = 0; i < arr.length; i++) {
        if (counter[arr[i]]){
            counter[arr[i]] += 1;
        } else {
            counter[arr[i]] = 1;
        }
      }

      for (var item in counter) {
        if (counter.hasOwnProperty(item) && counter[item] > 1) {
          duparray.push(item);
        }
      }

      return duparray;
    },

    square : function(arr) {
        var squares = [];
        for (var i = 0; i < arr.length; i++){
            squares.push(arr[i] * arr[i]);
        }
        return squares;
    },

    findAllOccurrences : function(arr, target) {
        var result = [];
        for (var i = 0; i < arr.length; i++){
            if (arr[i] == target){
                result.push(i);
            }
        }
        return result;
    }
  };
});
