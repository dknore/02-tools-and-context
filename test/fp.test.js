"use strict";

const forEach = require('../lib/fp.js').forEach;
const map = require('../lib/fp.js').map;
// const filter = require('../lib/fp.js').filter;
// const reduce = require('../lib/fp.js').reduce;

describe("forEach function", () => {
    describe("should execute a function for each item in a collection and return nothing.", () => {
        let expected = undefined;
        it("it should return undefined for a string", () => {
            let array = "undefined";
            let result = forEach(array);
            expect(result).toBe(expected);
        })
        it("when give the following array: [1, 2, 3], it should console.log '1, 2, 3'", () => {
            let array = [1, 2, 3];
            let result = forEach(array);
            expect(result).toBe(expected);
        })
    })
})

describe("map function", () => {
    describe("should turn one list into a new list by passing each element through the callback function and saving each result in a new list.", () => {
        it("when given the following Array: [1, 2, 3], should return the following NEW Array: [2, 4, 6]", () => {
            let expected = [2, 4, 6];
            let array = [1, 2, 3];
            let result = map(array);
            expect(result).toBe(expected);
        })
    })
})