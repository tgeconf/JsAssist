export declare const arrayUtils: {
    /**
     * judge if two arrays are equal
     * @param arr1 {Array}
     * @param arr2 {Array}
     * @return {Boolean}
     */
    isEqual: (arr1: any[], arr2: any[]) => boolean;
    /**
     * shuffle
     * @param arr {Array}
     * @return {Array}
     */
    shuffle: (arr: any[]) => any[];
    /**
     * generate a series of numbers without repetition
     * @param {number} count
     * @retrun {Array}
     */
    randSeries: (count: number) => any[];
    /**
     * remove repetition in the array
     * @param {Array} arr
     * @return {Array}
     */
    removeRept: (arr: any[]) => any[];
};
