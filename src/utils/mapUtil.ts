export const mapUtils = {
  /**
   * Check whether two maps are same
   * @param map1 
   * @param map2 
   * @returns 
   */
  sameMaps: (map1: Map<any, any>, map2: Map<any, any>) => {
    let testVal;
    if (map1.size !== map2.size) {
      return false;
    }
    for (const [key, val] of map1) {
      testVal = map2.get(key);
      if (testVal !== val || (testVal === undefined && !map2.has(key))) {
        return false;
      }
    }
    return true;
  },
};
