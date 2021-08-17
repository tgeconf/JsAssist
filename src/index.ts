import { arrayUtils } from './utils/arrayUtil';
import { colorUtils } from './utils/colorUtil';
import { numberUtils } from './utils/numberUtil';
import { objUtils } from './utils/objUtil';
import { stringUtils } from './utils/stringUtil';
import { mapUtils } from './utils/mapUtil';
import { imgUtils } from './utils/imgUtil';
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
//     typeof mathUtils
//     & typeof arrayUtils
//     & typeof generalUtils
//     & typeof objUtils
//     & typeof colorUtils
//     & typeof stringUtils
//     & typeof mapUtils = combineUtils({
//         generalUtils: generalUtils,
//         arrayUtil: arrayUtils,
//         mathUtils: mathUtils,
//         colorUtils: colorUtils,
//         objUtils: objUtils
//     });

export const jsAssist = {
    numberUtil: numberUtils,
    stringUtil: stringUtils,
    objUtil: objUtils,
    arrayUtil: arrayUtils,
    mapUtil: mapUtils,

    colorUtil: colorUtils,
    imgUtil: imgUtils,
    spacialUtil: specialUtils,
    timeUtil: timeUtils
}