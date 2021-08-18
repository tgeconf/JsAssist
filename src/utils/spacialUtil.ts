import { IBoundary, ICoord } from '../interfaces';

export const specialUtils = {
  isLasso(path: ICoord[], thr: number) {
    const isClosed: boolean = specialUtils.isClosedShape(path);
    const isAlmostClosed: boolean = specialUtils.pointDist(path[0], path[path.length - 1]) < thr;
    return isClosed || isAlmostClosed;
  },

  isCross(p1: ICoord, p2: ICoord, p3: ICoord, p4: ICoord) {
    const denominator: number = (p2.y - p1.y) * (p4.x - p3.x) - (p1.x - p2.x) * (p3.y - p4.y);
    if (denominator === 0) {
      return false;
    }

    const v1: ICoord = { x: p1.x - p3.x, y: p1.y - p3.y };
    const v2: ICoord = { x: p2.x - p3.x, y: p2.y - p3.y };
    const v3: ICoord = { x: p4.x - p3.x, y: p4.y - p3.y };

    const z1 = specialUtils.vecCrossMul(v1, v3);
    const z2 = specialUtils.vecCrossMul(v2, v3);

    return z1 * z2 <= 0;
  },

  vecCrossMul(v1: ICoord, v2: ICoord) {
    return v1.x * v2.y - v2.x * v1.y;
  },

  isClosedShape(path: ICoord[]) {
    for (let i = 0, len = path.length; i < len - 1; i++) {
      const p = path[i];
      const nextP = path[i + 1];
      for (let j = 0; j < len - 1; j++) {
        const testP = path[j];
        const testNextP = path[j + 1];
        if (
          testP !== p &&
          testNextP !== p &&
          testP !== nextP &&
          testNextP !== nextP &&
          specialUtils.isCross(testP, testNextP, p, nextP) &&
          specialUtils.isCross(p, nextP, testP, testNextP)
        ) {
          return true;
        }
      }
    }
    return false;
  },

  pointDist(pnt1: ICoord, pnt2: ICoord) {
    return Math.sqrt((pnt1.x - pnt2.x) * (pnt1.x - pnt2.x) + (pnt1.y - pnt2.y) * (pnt1.y - pnt2.y));
  },

  /**
   * calculate euclidean distance
   * @param vec1 {Array}
   * @param vec2 {Array}
   * @return {Number}
   */
  vecDist(vec1: number[], vec2: number[]) {
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

  pointInSector(p: ICoord, startAngle: number, endAngle: number, r: number) {
    startAngle = (180 * startAngle) / Math.PI;
    endAngle = (180 * endAngle) / Math.PI;
    let isInAngle: boolean = false;
    const pointAngle: number = specialUtils.getPointAngle(p);
    if (endAngle < 360) {
      if (pointAngle <= endAngle && pointAngle >= startAngle) {
        isInAngle = true;
      }
    } else {
      endAngle = endAngle - 360;
      if (pointAngle <= endAngle || pointAngle >= startAngle) {
        isInAngle = true;
      }
    }
    if (isInAngle) {
      const len: number = specialUtils.pointDist(p, { x: 0, y: 0 });
      isInAngle = r > len;
    }
    return isInAngle;
  },

  getPointAngle(p: ICoord) {
    let angle: number = 0;
    if (p.x === 0) {
      if (p.y === 0) {
        angle = 0;
      } else if (p.y > 0) {
        angle = 90;
      } else {
        angle = 270;
      }
    } else {
      angle = (Math.atan(p.y / p.x) * 180) / Math.PI;
      if (p.x < 0) {
        angle = angle + 180;
      } else if (p.x > 0 && p.y < 0) {
        angle = angle + 360;
      }
    }
    if (angle >= 360) {
      angle = 0;
    }
    return angle;
  },

  pointsBBox(pnts: ICoord[]) {
    const result: IBoundary = { x1: 100000000, y1: 100000000, x2: 0, y2: 0 };
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

  inBoundary(bbox: IBoundary | DOMRect, pnt: ICoord) {
    if (bbox instanceof DOMRect) {
      return pnt.x >= bbox.left && pnt.x <= bbox.right && pnt.y >= bbox.top && pnt.y <= bbox.bottom;
    } else {
      return pnt.x >= bbox.x1 && pnt.x <= bbox.x2 && pnt.y >= bbox.y1 && pnt.y <= bbox.y2;
    }
  },

  screenToSvgCoords(svg: any, x: number, y: number) {
    let result: ICoord = { x: 0, y: 0 };
    if (svg) {
      const rectPosiPoint1 = svg.createSVGPoint();
      rectPosiPoint1.x = x;
      rectPosiPoint1.y = y;
      result = rectPosiPoint1.matrixTransform(svg.getScreenCTM().inverse());
    }
    return result;
  },
};
