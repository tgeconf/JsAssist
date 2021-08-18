import { ICoord, ISvgEle } from '../interfaces';
export declare const svgUtils: {
    createSvgElement(tagPara: ISvgEle): SVGElement;
    svg2url: (svgElement: HTMLElement) => string;
    updateProps(ele: any, props: {
        [key: string]: string;
    }, flag?: boolean): void;
    resetPosi(svg: SVGSVGElement, ele: SVGElement): void;
    extractTransScaleNums: (transformStr: string) => {
        trans: number[];
        scale: number;
    };
    transScaleEle(ele: SVGElement, dist: ICoord, newScale: number): void;
    translateEle(ele: SVGElement, dist: ICoord): void;
    scaleEle(ele: SVGElement, newScale: number): void;
};
