"use strict";

//.forEach - executes a function for each item in a collection. Returns nothing.

const forEach = (array, cb) => {
    for(let i = 0; i < array.length; i++) {
      let result = cb(array[i]);
    }
  }

//.map - turns one list into a new list by passing each element through the callback function and saving each result in the new list.

const map = (array, cb) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        // let result = cb(element);
        newArray.push(result)
    }
    return newArray;
}

//.filter - takes all the elements in a list and returns a new list filtered down to only elements that pass some test defined by the callback function.

const filter = (array, cb) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        let result = cb(element);
        if (result === true) {
            result.push(element)
        }
    }
    return result;
}

//.reduce - takes all the elements in a list and reduces them down to a single value, starting from some initial value.

const reduce = (array, cb) => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
        result = cb(result, array[i]);
    }
    return result;
}

module.exports = {};
module.exports.forEach = forEach;
module.exports.map = map;
module.exports.filter = filter;
module.exports.reduce = reduce;
