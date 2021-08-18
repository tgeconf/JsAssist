"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberUtils = void 0;
exports.numberUtils = {
    /**
     * generate random number in a certain range
     * @param min {Number}
     * @param max {Number}
     * @return {Number}
     */
    randNum(min, max) {
        return Math.floor(min + Math.random() * (max - min));
    },
    /**
     * judge whether a string is number
     * @param str
     * @returns
     */
    isNumber(str) {
        return /^[0-9]+.?[0-9]*/.test(str);
    },
    /**
     * transform the number to fixed
     * @param input
     * @param num
     * @returns
     */
    floor(input, num) {
        return Math.floor(Math.pow(10, num) * input) / Math.pow(10, num);
    },
    /**
     * Round number
     * @param input
     * @param num
     * @returns
     */
    round(input, num) {
        const d = Math.pow(10, num);
        return Math.round(input * d) / d;
    },
    /**
     * Ceil number
     * @param input
     * @param num
     * @returns
     */
    ceil(input, num) {
        const d = Math.pow(10, num);
        return Math.ceil(input * d) / d;
    },
};
