import { IBoundary, ICoord } from '../interfaces';
export declare const specialUtils: {
    isLasso(path: ICoord[], thr: number): boolean;
    isCross(p1: ICoord, p2: ICoord, p3: ICoord, p4: ICoord): boolean;
    vecCrossMul(v1: ICoord, v2: ICoord): number;
    isClosedShape(path: ICoord[]): boolean;
    pointDist(pnt1: ICoord, pnt2: ICoord): number;
    /**
     * calculate euclidean distance
     * @param vec1 {Array}
     * @param vec2 {Array}
     * @return {Number}
     */
    vecDist(vec1: number[], vec2: number[]): number;
    pointInSector(p: ICoord, startAngle: number, endAngle: number, r: number): boolean;
    getPointAngle(p: ICoord): number;
    pointsBBox(pnts: ICoord[]): IBoundary;
    inBoundary(bbox: IBoundary | DOMRect, pnt: ICoord): boolean;
    screenToSvgCoords(svg: any, x: number, y: number): ICoord;
};
