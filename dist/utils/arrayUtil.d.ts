export declare const arrayUtils: {
    /**
     * shuffle
     * @param arr {Array}
     * @return {Array}
     */
    shuffle(arr: any[]): any[];
    /**
     * generate a series of numbers without repetition
     * @param {number} count
     * @retrun {Array}
     */
    randSeries(count: number): any[];
    /**
     * remove repetition in the array
     * @param {Array} arr
     * @return {Array}
     */
    removeRept(arr: any[]): any[];
    /**
     * judge whether two arrays are identical
     * @param arr1
     * @param arr2
     * @returns
     */
    isSameArrays(arr1: any[], arr2: any[]): boolean;
    /**
     * judge whether two sets are identical
     * @param set1
     * @param set2
     * @returns
     */
    isSameSets(set1: Set<any>, set2: Set<any>): boolean;
    /**
     * check whether b is an item in a
     * @param a
     * @param b
     */
    isChild(a: any[][], b: any[]): boolean;
    /**
     * whether arr1 contains arr2
     * @param arr1
     * @param arr2
     * @returns
     */
    arrayContained(arr1: any[], arr2: any[]): boolean;
    /**
     * remove arr2 from arr1
     * @param arr1
     * @param arr2
     * @returns
     */
    excludeArray(arr1: any[], arr2: any[]): any[];
    /**
     * check whether an array contains an object
     * @param objArr
     * @param obj
     * @returns
     */
    containObj: (objArr: {
        [key: string]: any;
    }[], obj: {
        [key: string]: any;
    }) => boolean;
};
