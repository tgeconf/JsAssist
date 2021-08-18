export declare const numberUtils: {
    /**
     * generate random number in a certain range
     * @param min {Number}
     * @param max {Number}
     * @return {Number}
     */
    randNum(min: number, max: number): number;
    /**
     * judge whether a string is number
     * @param str
     * @returns
     */
    isNumber(str: string): boolean;
    /**
     * transform the number to fixed
     * @param input
     * @param num
     * @returns
     */
    floor(input: number, num: number): number;
    /**
     * Round number
     * @param input
     * @param num
     * @returns
     */
    round(input: number, num: number): number;
    /**
     * Ceil number
     * @param input
     * @param num
     * @returns
     */
    ceil(input: number, num: number): number;
};
