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
/**
 * this is commet test
 */
export declare const jsAssist: {
    numberUtil: {
        randNum(min: number, max: number): number;
        isNumber(str: string): boolean;
        floor(input: number, num: number): number;
        round(input: number, num: number): number;
        ceil(input: number, num: number): number;
    };
    stringUtil: {
        firstLetterUppercase: (str: string) => string;
        toHyphen(propName: string): string;
    };
    arrayUtil: {
        shuffle(arr: any[]): any[];
        randSeries(count: number): any[];
        removeRept(arr: any[]): any[];
        isSameArrays(arr1: any[], arr2: any[]): boolean;
        isSameSets(set1: Set<any>, set2: Set<any>): boolean;
        isChild(a: any[][], b: any[]): boolean;
        arrayContained(arr1: any[], arr2: any[]): boolean;
        excludeArray(arr1: any[], arr2: any[]): any[];
        containObj: (objArr: {
            [key: string]: any;
        }[], obj: {
            [key: string]: any;
        }) => boolean;
    };
    mapUtil: {
        identicalMaps: (map1: Map<any, any>, map2: Map<any, any>) => boolean;
    };
    objUtil: {
        isEmptyObj: (obj: any) => boolean;
        deepClone: (values: any) => any;
        calEucDis: (obj1: any, obj2: any) => number;
        getType: (obj: any) => string;
    };
    colorUtil: {
        hexToRgb: (hex: string) => number[];
        rgbToHex: (rgb: string) => string;
    };
    spacialUtil: {
        isLasso(path: import("./interfaces").ICoord[], thr: number): boolean;
        isCross(p1: import("./interfaces").ICoord, p2: import("./interfaces").ICoord, p3: import("./interfaces").ICoord, p4: import("./interfaces").ICoord): boolean;
        vecCrossMul(v1: import("./interfaces").ICoord, v2: import("./interfaces").ICoord): number;
        isClosedShape(path: import("./interfaces").ICoord[]): boolean;
        pointDist(pnt1: import("./interfaces").ICoord, pnt2: import("./interfaces").ICoord): number;
        vecDist(vec1: number[], vec2: number[]): number;
        pointInSector(p: import("./interfaces").ICoord, startAngle: number, endAngle: number, r: number): boolean;
        getPointAngle(p: import("./interfaces").ICoord): number;
        pointsBBox(pnts: import("./interfaces").ICoord[]): import("./interfaces").IBoundary;
        inBoundary(bbox: DOMRect | import("./interfaces").IBoundary, pnt: import("./interfaces").ICoord): boolean;
        screenToSvgCoords(svg: any, x: number, y: number): import("./interfaces").ICoord;
    };
    timeUtil: {
        formatTime(time: number): string;
        fetchTimeNum(timeStr: string): 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;
    };
    svgUtil: {
        createSvgElement(tagPara: import("./interfaces").ISvgEle): SVGElement;
        svg2url: (svgElement: HTMLElement) => string;
        updateProps(ele: any, props: {
            [key: string]: string;
        }, flag?: boolean): void;
        resetPosi(svg: SVGSVGElement, ele: SVGElement): void;
        extractTransScaleNums: (transformStr: string) => {
            trans: number[];
            scale: number;
        };
        transScaleEle(ele: SVGElement, dist: import("./interfaces").ICoord, newScale: number): void;
        translateEle(ele: SVGElement, dist: import("./interfaces").ICoord): void;
        scaleEle(ele: SVGElement, newScale: number): void;
    };
};
