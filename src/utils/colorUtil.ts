export const colorUtils = {
  /**
   * hex to rgb
   * @param hex {String}
   * @return {Array}
   */
  hexToRgb: (hex: string) => {
    return [
      parseInt('0x' + hex.substring(1, 3), 10),
      parseInt('0x' + hex.substring(3, 5), 10),
      parseInt('0x' + hex.substring(5, 7), 10),
    ];
  },

  /**
   * rgb to hex
   * @param rgb {String} // rgb(r, g, b)
   * @return {String}
   */
  rgbToHex: (rgb: string) => {
    const color: string[] = rgb.toString().match(/\d+/g) as string[];
    let hex = '#';

    for (let i = 0; i < 3; i++) {
      hex += ('0' + Number(color[i]).toString(16)).slice(-2);
    }
    return hex;
  },
};
