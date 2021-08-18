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
  toFixed(input: number, num: number) {
    return Math.floor(Math.pow(10, num) * input) / Math.pow(10, num);
  },

  /**
   * rounded number
   * @param n 
   * @param d 
   * @returns 
   */
  round(n: number, d: number) {
    d = Math.pow(10, d);
    return Math.round(n * d) / d;
  },
};
