export const numberUtils = {
  /**
   * generate random number in a certain range
   * @param min {Number}
   * @param max {Number}
   * @return {Number}
   */
  randNum(min: number, max: number) {
    return Math.floor(min + Math.random() * (max - min));
  },

  /**
   * judge whether a string is number
   * @param str 
   * @returns 
   */
  isNumber(str: string) {
    return /^[0-9]+.?[0-9]*/.test(str);
  },

  /**
   * transform the number to fixed
   * @param input 
   * @param num 
   * @returns 
   */
  floor(input: number, num: number) {
    return Math.floor(Math.pow(10, num) * input) / Math.pow(10, num);
  },

  /**
   * Round number
   * @param input 
   * @param num 
   * @returns 
   */
  round(input: number, num: number) {
    const d: number = Math.pow(10, num);
    return Math.round(input * d) / d;
  },

  /**
   * Ceil number
   * @param input 
   * @param num 
   * @returns 
   */
   ceil(input: number, num: number) {
    const d: number = Math.pow(10, num);
    return Math.ceil(input * d) / d;
  },
};
