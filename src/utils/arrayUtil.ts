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
    sameArrays(arr1: any[], arr2: any[]) {
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
    sameSets(set1: Set<any>, set2: Set<any>) {
        return arrayUtils.sameArrays([...set1], [...set2]);
    },

    /**
     * check whether b is an item in a
     * @param a
     * @param b
     */
    isChild(a: any[][], b: any[]) {
        for (let i = 0, len = a.length; i < len; i++) {
            if (arrayUtils.sameArrays(a[i], b)) {
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
    arrayContained(arr1: any[], arr2: any[]) {
        if (arr1.length < arr2.length) return false;
        for (const item of arr2) {
            if (arr1.indexOf(item) === -1) return false;
        }
        return true;
    },

    /**
     * remove arr2 from arr1
     * @param arr1 
     * @param arr2 
     * @returns 
     */
    excludeArray(arr1: any[], arr2: any[]) {
        return arr1.filter((a) => !arr2.includes(a));
    },

    /**
     * check whether an array contains an object
     * @param objArr 
     * @param obj 
     * @returns 
     */
    containObj: (objArr: { [key: string]: any }[], obj: { [key: string]: any }) => {
        let contains: boolean = false;
        objArr.forEach((tmpObj: { [key: string]: any }) => {
            contains = contains || isEqual(tmpObj, obj);
        });
        return contains;
    },
};
