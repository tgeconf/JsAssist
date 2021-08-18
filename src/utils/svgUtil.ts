import { ICoord, ISvgEle } from '../interfaces';
import { stringUtils } from './stringUtil';

export const svgUtils = {
  createSvgElement(tagPara: ISvgEle) {
    const svgElement = document.createElementNS('http://www.w3.org/2000/svg', tagPara.tag);
    Object.keys(tagPara.para).forEach((key) => {
      const attrName: string = tagPara.flag ? stringUtils.toHyphen(key) : key;
      svgElement.setAttributeNS(null, attrName, `${tagPara.para[key]}`);
    });
    return svgElement;
  },

  svg2url: (svgElement: HTMLElement) => {
    const svgString = svgElement.outerHTML;
    const svg = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svg);
    return url;
  },

  updateProps(ele: any, props: { [key: string]: string }, flag: boolean = false) {
    Object.keys(props).forEach((key: string) => {
      const attrName: string = flag ? stringUtils.toHyphen(key) : key;
      ele.setAttributeNS(null, attrName, props[key]);
    });
  },

  resetPosi(svg: SVGSVGElement, ele: SVGElement) {
    ele.setAttributeNS(null, 'transform', 'translate(0,0)');
    switch (ele.tagName.toLowerCase()) {
      case 'rect':
      case 'text':
        svgUtils.updateProps(
          ele,
          {
            x: '0',
            y: '0',
          },
          true,
        );
        break;
      case 'circle':
        svgUtils.updateProps(
          ele,
          {
            cx: '0',
            cy: '0',
          },
          true,
        );
        break;
      case 'line':
        const x1: number = parseFloat(ele.getAttributeNS(null, 'x1') as string);
        const x2: number = parseFloat(ele.getAttributeNS(null, 'x2') as string);
        const y1: number = parseFloat(ele.getAttributeNS(null, 'y1') as string);
        const y2: number = parseFloat(ele.getAttributeNS(null, 'y2') as string);
        const midPnt: ICoord = { x: (x1 + x2) / 2, y: (y1 + y2) / 2 };
        svgUtils.updateProps(
          ele,
          {
            x1: `${x1 - midPnt.x}`,
            y1: `${y1 - midPnt.y}`,
            x2: `${x2 - midPnt.x}`,
            y2: `${y2 - midPnt.y}`,
          },
          true,
        );
        break;
      case 'path':
        let d: string = ele.getAttributeNS(null, 'd') as string;
        d = d
          .replace(/(?<=\d)\s(?=[mMlLhHvVcCsSqQtTaAzZ])/g, '')
          .replace(/(?<=[mMlLhHvVcCsSqQtTaA])\s(?=(\d|[-+]))/g, '')
          .replace(/\s/g, ',');
        const cmdRegExp: RegExp = new RegExp(/[mMlLhHvVcCsSqQtTaAzZ][^mMlLhHvVcCsSqQtTaAzZ]*/g);
        const cmds: RegExpMatchArray | null = d.match(cmdRegExp);
        if (cmds && cmds[0].substring(0, 1).toLowerCase() === 'm') {
          const moveDist: number[] = cmds[0]
            .substring(1)
            .split(',')
            .map((n) => parseFloat(n));
          ele.setAttributeNS(null, 'transform', `translate(${-moveDist[0]},${-moveDist[1]})`);
        }
        break;
    }
  },

  extractTransScaleNums: (transformStr: string) => {
    let transValues: number[] = [0, 0];
    let scaleValue: number = 1;
    if (transformStr) {
      const values = transformStr.match(/\(([^)]*)\)/g);
      if (values) {
        if (typeof values[0] !== 'undefined') {
          const transStr: string = values[0].replace(/[\(\)]/g, '');
          transValues = transStr.split(',').map((s) => parseFloat(s));
        }
        if (typeof values[1] !== 'undefined') {
          scaleValue = parseFloat(values[1].replace(/[\(\)]/g, ''));
        }
      }
    }
    return { trans: transValues, scale: scaleValue };
  },

  transScaleEle(ele: SVGElement, dist: ICoord, newScale: number) {
    const { trans, scale } = svgUtils.extractTransScaleNums(ele.getAttributeNS(null, 'transform') as string);
    ele.setAttributeNS(null, 'transform', `translate(${trans[0] + dist.x}, ${trans[1] + dist.y}) scale(${newScale})`);
  },

  translateEle(ele: SVGElement, dist: ICoord) {
    const { trans, scale } = svgUtils.extractTransScaleNums(ele.getAttributeNS(null, 'transform') as string);
    ele.setAttributeNS(
      null,
      'transform',
      `translate(${trans[0] + dist.x}, ${trans[1] + dist.y}) ${scale !== 1 ? 'scale(' + scale + ')' : ''}`,
    );
  },

  scaleEle(ele: SVGElement, newScale: number) {
    const { trans, scale } = svgUtils.extractTransScaleNums(ele.getAttributeNS(null, 'transform') as string);
    ele.setAttributeNS(null, 'transform', `translate(${trans[0]}, ${trans[1]}) scale(${newScale})`);
  },
};
