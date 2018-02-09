//.forEach - executes a function for each item in a collection. Returns nothing.

const forEach = (array, cb) => {

}

//.map - turns one list into a new list by passing each element through the callback function and saving each result in the new list.

const map = (array, cb) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        let result = cb(element);
        results.push(result)
    }
    return result;
}

//.filter - takes all the elements in a list and returns a new list filtered down to only elements that pass some test defined by the callback function.

const filter = (array, cb) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        let result = cb(element);
        if (result === true) {
          results.push(element)
        }
    }
    return result;
}

//.reduce - takes all the elements in a list and reduces them down to a single value, starting from some initial value.

const reduce = (array, cb) => {
    let result = initialValue;
    for (let i = 0; i < arr.length; i++) {
        result = cb(result, arr[i]);
    }
    return result;
}