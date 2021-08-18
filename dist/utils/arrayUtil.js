"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayUtils = void 0;
const lodash_1 = require("lodash");
exports.arrayUtils = {
    /**
     * shuffle
     * @param arr {Array}
     * @return {Array}
     */
    shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    },
    /**
     * generate a series of numbers without repetition
     * @param {number} count
     * @retrun {Array}
     */
    randSeries(count) {
        const arr = [];
        for (let i = 0; i < count; i++) {
            arr[i] = i;
        }
        return exports.arrayUtils.shuffle(arr);
    },
    /**
     * remove repetition in the array
     * @param {Array} arr
     * @return {Array}
     */
    removeRept(arr) {
        return [...new Set(arr)];
    },
    /**
     * judge whether two arrays are identical
     * @param arr1
     * @param arr2
     * @returns
     */
    isSameArrays(arr1, arr2) {
        let same = true;
        if (arr1.length !== arr2.length) {
            same = false;
        }
        for (const item of arr1) {
            if (arr2.indexOf(item) < 0) {
                same = false;
                break;
            }
        }
        return same;
    },
    /**
     * judge whether two sets are identical
     * @param set1
     * @param set2
     * @returns
     */
    isSameSets(set1, set2) {
        return exports.arrayUtils.isSameArrays([...set1], [...set2]);
    },
    /**
     * check whether b is an item in a
     * @param a
     * @param b
     */
    isChild(a, b) {
        for (let i = 0, len = a.length; i < len; i++) {
            if (exports.arrayUtils.isSameArrays(a[i], b)) {
                return true;
            }
        }
        return false;
    },
    /**
     * whether arr1 contains arr2
     * @param arr1
     * @param arr2
     * @returns
     */
    arrayContained(arr1, arr2) {
        if (arr1.length < arr2.length)
            return false;
        for (const item of arr2) {
            if (arr1.indexOf(item) === -1)
                return false;
        }
        return true;
    },
    /**
     * remove arr2 from arr1
     * @param arr1
     * @param arr2
     * @returns
     */
    excludeArray(arr1, arr2) {
        return arr1.filter((a) => !arr2.includes(a));
    },
    /**
     * check whether an array contains an object
     * @param objArr
     * @param obj
     * @returns
     */
    containObj: (objArr, obj) => {
        let contains = false;
        objArr.forEach((tmpObj) => {
            contains = contains || lodash_1.isEqual(tmpObj, obj);
        });
        return contains;
    },
};
