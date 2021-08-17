"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsAssist = void 0;
const arrayUtil_1 = require("./utils/arrayUtil");
const colorUtil_1 = require("./utils/colorUtil");
const generalUtil_1 = require("./utils/generalUtil");
const mathUtil_1 = require("./utils/mathUtil");
const objUtil_1 = require("./utils/objUtil");
const combineUtils = (tools) => {
    let result = {};
    Object.keys(tools).forEach((key) => {
        result = Object.assign(Object.assign({}, result), tools[key]);
    });
    return result;
};
const combinedUtils = combineUtils({
    generalUtils: generalUtil_1.generalUtils,
    arrayUtil: arrayUtil_1.arrayUtils,
    mathUtils: mathUtil_1.mathUtils,
    colorUtils: colorUtil_1.colorUtils,
    objUtils: objUtil_1.objUtils
});
function asSchema(t) {
    return t;
}
const combinedUtilsSchema = asSchema(combinedUtils);
exports.jsAssist = combinedUtils;
// export const jsAssist: TCombinedUtils = combinedUtils;
