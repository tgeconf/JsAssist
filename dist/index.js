"use strict";
/**
 * @api {post} /src 请求首页数据
 * @apiVersion 1.0.8
 * @apiName 获取首页数据
 * @apiGroup index
 *
 * @apiSuccess {Number} flag 是否获取到数据 1成功 0失败
 * @apiSuccess {Array} books 返回书籍内容
 * @apiSuccess {String} msg  返回信息
 *
 * @apiSuccessExample {json} Success-Response:
 *    {
 *      "code": 200,
 *      "msg": "OK"
 *    }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     { "flag": 0, "msg": "rankingId有问题" }
 *
 * @apiSampleRequest http://127.0.0.1:3000/test
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsAssist = void 0;
const arrayUtil_1 = require("./utils/arrayUtil");
const colorUtil_1 = require("./utils/colorUtil");
const numberUtil_1 = require("./utils/numberUtil");
const objUtil_1 = require("./utils/objUtil");
const stringUtil_1 = require("./utils/stringUtil");
const mapUtil_1 = require("./utils/mapUtil");
const svgUtil_1 = require("./utils/svgUtil");
const spacialUtil_1 = require("./utils/spacialUtil");
const timeUtil_1 = require("./utils/timeUtil");
// const combineUtils = (tools: { [key: string]: any }) => {
//     let result: any = {};
//     Object.keys(tools).forEach((key) => {
//         result = { ...result, ...tools[key] };
//     })
//     return result;
// };
// export const jsAssist:
//     typeof numberUtils
//     & typeof arrayUtils
//     & typeof objUtils
//     & typeof colorUtils
//     & typeof stringUtils
//     & typeof mapUtils = combineUtils({
//         arrayUtil: arrayUtils,
//         numberUtils: numberUtils,
//         colorUtils: colorUtils,
//         objUtils: objUtils
//     });
/**
 * this is commet test
 */
exports.jsAssist = {
    numberUtil: numberUtil_1.numberUtils,
    stringUtil: stringUtil_1.stringUtils,
    arrayUtil: arrayUtil_1.arrayUtils,
    mapUtil: mapUtil_1.mapUtils,
    objUtil: objUtil_1.objUtils,
    colorUtil: colorUtil_1.colorUtils,
    spacialUtil: spacialUtil_1.specialUtils,
    timeUtil: timeUtil_1.timeUtils,
    svgUtil: svgUtil_1.svgUtils,
};
