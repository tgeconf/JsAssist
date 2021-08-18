"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringUtils = void 0;
exports.stringUtils = {
    /**
     * Capitalize the first letter of the given string
     * @param str
     * @returns
     */
    firstLetterUppercase: (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    /**
     * camel to hyphen
     * @param propName : css prop name in camel style
     */
    toHyphen(propName) {
        return propName.replace(/[A-Z]/g, (matched, idx) => {
            return `-${matched.toLowerCase()}`;
        });
    },
};
