"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.svgUtils = void 0;
const stringUtil_1 = require("./stringUtil");
exports.svgUtils = {
    createSvgElement(tagPara) {
        const svgElement = document.createElementNS('http://www.w3.org/2000/svg', tagPara.tag);
        Object.keys(tagPara.para).forEach((key) => {
            const attrName = tagPara.flag ? stringUtil_1.stringUtils.toHyphen(key) : key;
            svgElement.setAttributeNS(null, attrName, `${tagPara.para[key]}`);
        });
        return svgElement;
    },
    svg2url: (svgElement) => {
        const svgString = svgElement.outerHTML;
        const svg = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(svg);
        return url;
    },
    updateProps(ele, props, flag = false) {
        Object.keys(props).forEach((key) => {
            const attrName = flag ? stringUtil_1.stringUtils.toHyphen(key) : key;
            ele.setAttributeNS(null, attrName, props[key]);
        });
    },
    resetPosi(svg, ele) {
        ele.setAttributeNS(null, 'transform', 'translate(0,0)');
        switch (ele.tagName.toLowerCase()) {
            case 'rect':
            case 'text':
                exports.svgUtils.updateProps(ele, {
                    x: '0',
                    y: '0',
                }, true);
                break;
            case 'circle':
                exports.svgUtils.updateProps(ele, {
                    cx: '0',
                    cy: '0',
                }, true);
                break;
            case 'line':
                const x1 = parseFloat(ele.getAttributeNS(null, 'x1'));
                const x2 = parseFloat(ele.getAttributeNS(null, 'x2'));
                const y1 = parseFloat(ele.getAttributeNS(null, 'y1'));
                const y2 = parseFloat(ele.getAttributeNS(null, 'y2'));
                const midPnt = { x: (x1 + x2) / 2, y: (y1 + y2) / 2 };
                exports.svgUtils.updateProps(ele, {
                    x1: `${x1 - midPnt.x}`,
                    y1: `${y1 - midPnt.y}`,
                    x2: `${x2 - midPnt.x}`,
                    y2: `${y2 - midPnt.y}`,
                }, true);
                break;
            case 'path':
                let d = ele.getAttributeNS(null, 'd');
                d = d
                    .replace(/(?<=\d)\s(?=[mMlLhHvVcCsSqQtTaAzZ])/g, '')
                    .replace(/(?<=[mMlLhHvVcCsSqQtTaA])\s(?=(\d|[-+]))/g, '')
                    .replace(/\s/g, ',');
                const cmdRegExp = new RegExp(/[mMlLhHvVcCsSqQtTaAzZ][^mMlLhHvVcCsSqQtTaAzZ]*/g);
                const cmds = d.match(cmdRegExp);
                if (cmds && cmds[0].substring(0, 1).toLowerCase() === 'm') {
                    const moveDist = cmds[0]
                        .substring(1)
                        .split(',')
                        .map((n) => parseFloat(n));
                    ele.setAttributeNS(null, 'transform', `translate(${-moveDist[0]},${-moveDist[1]})`);
                }
                break;
        }
    },
    extractTransScaleNums: (transformStr) => {
        let transValues = [0, 0];
        let scaleValue = 1;
        if (transformStr) {
            const values = transformStr.match(/\(([^)]*)\)/g);
            if (values) {
                if (typeof values[0] !== 'undefined') {
                    const transStr = values[0].replace(/[\(\)]/g, '');
                    transValues = transStr.split(',').map((s) => parseFloat(s));
                }
                if (typeof values[1] !== 'undefined') {
                    scaleValue = parseFloat(values[1].replace(/[\(\)]/g, ''));
                }
            }
        }
        return { trans: transValues, scale: scaleValue };
    },
    transScaleEle(ele, dist, newScale) {
        const { trans, scale } = exports.svgUtils.extractTransScaleNums(ele.getAttributeNS(null, 'transform'));
        ele.setAttributeNS(null, 'transform', `translate(${trans[0] + dist.x}, ${trans[1] + dist.y}) scale(${newScale})`);
    },
    translateEle(ele, dist) {
        const { trans, scale } = exports.svgUtils.extractTransScaleNums(ele.getAttributeNS(null, 'transform'));
        ele.setAttributeNS(null, 'transform', `translate(${trans[0] + dist.x}, ${trans[1] + dist.y}) ${scale !== 1 ? 'scale(' + scale + ')' : ''}`);
    },
    scaleEle(ele, newScale) {
        const { trans, scale } = exports.svgUtils.extractTransScaleNums(ele.getAttributeNS(null, 'transform'));
        ele.setAttributeNS(null, 'transform', `translate(${trans[0]}, ${trans[1]}) scale(${newScale})`);
    },
};
