"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapUtils = void 0;
exports.mapUtils = {
    identicalMaps: (map1, map2) => {
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
