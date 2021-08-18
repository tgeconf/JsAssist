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

import { arrayUtils } from './utils/arrayUtil';
import { colorUtils } from './utils/colorUtil';
import { numberUtils } from './utils/numberUtil';
import { objUtils } from './utils/objUtil';
import { stringUtils } from './utils/stringUtil';
import { mapUtils } from './utils/mapUtil';
import { svgUtils } from './utils/svgUtil';
import { specialUtils } from './utils/spacialUtil';
import { timeUtils } from './utils/timeUtil';

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

export const jsAssist = {
  numberUtil: numberUtils,
  stringUtil: stringUtils,
  arrayUtil: arrayUtils,
  mapUtil: mapUtils,
  objUtil: objUtils,

  colorUtil: colorUtils,
  spacialUtil: specialUtils,
  timeUtil: timeUtils,
  svgUtil: svgUtils,
};
