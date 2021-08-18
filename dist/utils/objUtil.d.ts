export declare const objUtils: {
    /**
     * judge if one object is null
     * @param obj {object}
     * @return {Boolean}
     */
    isEmptyObj: (obj: any) => boolean;
    /**
     * deep clone
     * @param {Any}
     * @return {same as input}
     */
    deepClone: (values: any) => any;
    /**
     * calculate euclidean distance between two objects
     * @param obj1 {Object}
     * @param obj2 {Object}
     * @return {Number}
     */
    calEucDis: (obj1: any, obj2: any) => number;
    getType: (obj: any) => string;
};
