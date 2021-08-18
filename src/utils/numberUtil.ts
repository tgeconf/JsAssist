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

  isNumber(str: string) {
    return /^[0-9]+.?[0-9]*/.test(str);
  },

  toFixed(input: number, num: number) {
    return Math.floor(Math.pow(10, num) * input) / Math.pow(10, num);
  },

  round(n: number, d: number) {
    d = Math.pow(10, d);
    return Math.round(n * d) / d;
  },
};
