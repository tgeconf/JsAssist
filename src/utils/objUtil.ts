export const objUtils = {
  /**
   * judge if one object is null
   * @param obj {object}
   * @return {Boolean}
   */
  isEmptyObj: (obj: any) => {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
      return false;
    }
    return !Object.keys(obj).length;
  },

  /**
   * deep clone
   * @param {Any}
   * @return {same as input}
   */
  deepClone: (values: any) => {
    let copy: any;

    // handle 3 simple types, and null or undefined
    if (null == values || 'object' !== typeof values) {
      return values;
    }

    // handle Date
    if (values instanceof Date) {
      copy = new Date();
      copy.setTime(values.getTime());
      return copy;
    }

    // handle Array
    if (values instanceof Array) {
      copy = [];
      for (let i = 0, len = values.length; i < len; i++) {
        copy[i] = objUtils.deepClone(values[i]);
      }
      return copy;
    }

    // handle Object
    if (values instanceof Object) {
      copy = {};
      for (const attr in values) {
        if (values.hasOwnProperty(attr)) {
          copy[attr] = objUtils.deepClone(values[attr]);
        }
      }
      return copy;
    }

    throw new Error("Doesn't support copying this type of values!");
  },

  /**
   * calculate euclidean distance between two objects
   * @param obj1 {Object}
   * @param obj2 {Object}
   * @return {Number}
   */
  calEucDis: (obj1: any, obj2: any) => {
    const numArr1 = Object.getOwnPropertyNames(obj1).length;
    const numArr2 = Object.getOwnPropertyNames(obj2).length;
    // judge length
    if (numArr1 !== numArr2) {
      throw new Error('number of attributes mis-match!');
    }

    let sum = 0;
    for (const key in Object.keys(obj1)) {
      if (obj1.hasOwnProperty(key)) {
        sum += (obj1[key] - obj2[key]) * (obj1[key] - obj2[key]);
      }
    }
    return Math.sqrt(sum);
  },

  getType: (obj: any) => {
    const type: string = (Object as any).prototype.toString
      .call(obj)
      .match(/^\[object (.*)\]$/)[1]
      .toLowerCase();
    if (type === 'string' && typeof obj === 'object') return 'object'; // Let "new String('')" return 'object'
    if (obj === null) return 'null'; // PhantomJS has type "DOMWindow" for null
    if (obj === undefined) return 'undefined'; // PhantomJS has type "DOMWindow" for undefined
    return type;
  },
};
