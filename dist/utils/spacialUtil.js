"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.specialUtils = void 0;
exports.specialUtils = {
    isLasso(path, thr) {
        const isClosed = exports.specialUtils.isClosedShape(path);
        const isAlmostClosed = exports.specialUtils.pointDist(path[0], path[path.length - 1]) < thr;
        return isClosed || isAlmostClosed;
    },
    isCross(p1, p2, p3, p4) {
        const denominator = (p2.y - p1.y) * (p4.x - p3.x) - (p1.x - p2.x) * (p3.y - p4.y);
        if (denominator === 0) {
            return false;
        }
        const v1 = { x: p1.x - p3.x, y: p1.y - p3.y };
        const v2 = { x: p2.x - p3.x, y: p2.y - p3.y };
        const v3 = { x: p4.x - p3.x, y: p4.y - p3.y };
        const z1 = exports.specialUtils.vecCrossMul(v1, v3);
        const z2 = exports.specialUtils.vecCrossMul(v2, v3);
        return z1 * z2 <= 0;
    },
    vecCrossMul(v1, v2) {
        return v1.x * v2.y - v2.x * v1.y;
    },
    isClosedShape(path) {
        for (let i = 0, len = path.length; i < len - 1; i++) {
            const p = path[i];
            const nextP = path[i + 1];
            for (let j = 0; j < len - 1; j++) {
                const testP = path[j];
                const testNextP = path[j + 1];
                if (testP !== p &&
                    testNextP !== p &&
                    testP !== nextP &&
                    testNextP !== nextP &&
                    exports.specialUtils.isCross(testP, testNextP, p, nextP) &&
                    exports.specialUtils.isCross(p, nextP, testP, testNextP)) {
                    return true;
                }
            }
        }
        return false;
    },
    pointDist(pnt1, pnt2) {
        return Math.sqrt((pnt1.x - pnt2.x) * (pnt1.x - pnt2.x) + (pnt1.y - pnt2.y) * (pnt1.y - pnt2.y));
    },
    /**
     * calculate euclidean distance
     * @param vec1 {Array}
     * @param vec2 {Array}
     * @return {Number}
     */
    vecDist(vec1, vec2) {
        // judge length
        if (vec1.length !== vec2.length) {
            throw new Error('vector length mis-match!');
        }
        let sum = 0;
        for (let i = 0, len = vec1.length; i < len; i++) {
            sum += (vec1[i] - vec2[i]) * (vec1[i] - vec2[i]);
        }
        return Math.sqrt(sum);
    },
    pointInSector(p, startAngle, endAngle, r) {
        startAngle = (180 * startAngle) / Math.PI;
        endAngle = (180 * endAngle) / Math.PI;
        let isInAngle = false;
        const pointAngle = exports.specialUtils.getPointAngle(p);
        if (endAngle < 360) {
            if (pointAngle <= endAngle && pointAngle >= startAngle) {
                isInAngle = true;
            }
        }
        else {
            endAngle = endAngle - 360;
            if (pointAngle <= endAngle || pointAngle >= startAngle) {
                isInAngle = true;
            }
        }
        if (isInAngle) {
            const len = exports.specialUtils.pointDist(p, { x: 0, y: 0 });
            isInAngle = r > len;
        }
        return isInAngle;
    },
    getPointAngle(p) {
        let angle = 0;
        if (p.x === 0) {
            if (p.y === 0) {
                angle = 0;
            }
            else if (p.y > 0) {
                angle = 90;
            }
            else {
                angle = 270;
            }
        }
        else {
            angle = (Math.atan(p.y / p.x) * 180) / Math.PI;
            if (p.x < 0) {
                angle = angle + 180;
            }
            else if (p.x > 0 && p.y < 0) {
                angle = angle + 360;
            }
        }
        if (angle >= 360) {
            angle = 0;
        }
        return angle;
    },
    pointsBBox(pnts) {
        const result = { x1: 100000000, y1: 100000000, x2: 0, y2: 0 };
        pnts.forEach((p) => {
            if (p.x < result.x1) {
                result.x1 = p.x;
            }
            if (p.x > result.x2) {
                result.x2 = p.x;
            }
            if (p.y < result.y1) {
                result.y1 = p.y;
            }
            if (p.y > result.y2) {
                result.y2 = p.y;
            }
        });
        return result;
    },
    inBoundary(bbox, pnt) {
        if (bbox instanceof DOMRect) {
            return pnt.x >= bbox.left && pnt.x <= bbox.right && pnt.y >= bbox.top && pnt.y <= bbox.bottom;
        }
        else {
            return pnt.x >= bbox.x1 && pnt.x <= bbox.x2 && pnt.y >= bbox.y1 && pnt.y <= bbox.y2;
        }
    },
    screenToSvgCoords(svg, x, y) {
        let result = { x: 0, y: 0 };
        if (svg) {
            const rectPosiPoint1 = svg.createSVGPoint();
            rectPosiPoint1.x = x;
            rectPosiPoint1.y = y;
            result = rectPosiPoint1.matrixTransform(svg.getScreenCTM().inverse());
        }
        return result;
    },
};
