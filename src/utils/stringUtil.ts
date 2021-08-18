import { ICoord } from '../interfaces';

export const stringUtils = {
  /**
   * Capitalize the first letter of the given string
   * @param str
   * @returns
   */
  firstLetterUppercase: (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  /**
   * calculate distance between two points
   * @param pnt1
   * @param pnt2
   * @returns
   */
  pointDist: (pnt1: ICoord, pnt2: ICoord) => {
    return Math.sqrt((pnt1.x - pnt2.x) * (pnt1.x - pnt2.x) + (pnt1.y - pnt2.y) * (pnt1.y - pnt2.y));
  },

  /**
   * camel to hyphen
   * @param propName : css prop name in camel style
   */
  toHyphen(propName: string) {
    return propName.replace(/[A-Z]/g, (matched: string, idx: number) => {
      return `-${matched.toLowerCase()}`;
    });
  },
};
