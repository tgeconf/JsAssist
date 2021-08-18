import { isEqual } from 'lodash';

export const arrayUtils = {
    /**
     * shuffle
     * @param arr {Array}
     * @return {Array}
     */
    shuffle(arr: any[]) {
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
    randSeries(count: number) {
        const arr = [];
        for (let i = 0; i < count; i++) {
            arr[i] = i;
        }
        return arrayUtils.shuffle(arr);
    },

    /**
     * remove repetition in the array
     * @param {Array} arr
     * @return {Array}
     */
    removeRept(arr: any[]) {
        return [...new Set(arr)];
    },

    /**
     * judge whether two arrays are identical
     * @param arr1
     * @param arr2
     * @returns
     */
    isSameArrays(arr1: any[], arr2: any[]) {
        let same: boolean = true;
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
    identicalSets(set1: Set<any>, set2: Set<any>) {
        return arrayUtils.isSameArrays([...set1], [...set2]);
    },

    /**
     * check whether b is an item in a
     * @param a
     * @param b
     */
    array2DItem(a: any[][], b: any[]) {
        for (let i = 0, len = a.length; i < len; i++) {
            if (arrayUtils.isSameArrays(a[i], b)) {
                return true;
            }
        }
        return false;
    },

    /**
     * whether a contains b
     * @param a
     * @param b
     */
    arrayContained(a: any[], b: any[]) {
        if (a.length < b.length) return false;
        for (const item of b) {
            if (a.indexOf(item) === -1) return false;
        }
        return true;
    },

    /**
     * remove b from a
     * @param a
     * @param b
     */
    excludeArray(a: any[], b: any[]) {
        return a.filter((c) => !b.includes(c));
    },

    containObj: (objArr: { [key: string]: any }[], obj: { [key: string]: any }) => {
        let contains: boolean = false;
        objArr.forEach((tmpObj: { [key: string]: any }) => {
            contains = contains || isEqual(tmpObj, obj);
        });
        return contains;
    },
};
