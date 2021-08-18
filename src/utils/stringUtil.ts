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
   * camel to hyphen
   * @param propName : css prop name in camel style
   */
  toHyphen(propName: string) {
    return propName.replace(/[A-Z]/g, (matched: string, idx: number) => {
      return `-${matched.toLowerCase()}`;
    });
  },
};
