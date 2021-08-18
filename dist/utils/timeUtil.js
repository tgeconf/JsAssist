"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeUtils = void 0;
exports.timeUtils = {
    /**
     * translate time in ms to mm:ss.ms
     * @param time
     * @returns
     */
    formatTime(time) {
        const minute = Math.floor(time / 60000);
        const second = Math.floor((time - minute * 60000) / 1000);
        const ms = Math.floor((time - minute * 60000 - second * 1000) / 1);
        const minStr = minute < 10 ? '0' + minute : '' + minute;
        const secStr = second < 10 ? '0' + second : '' + second;
        const msStr = ms < 100 ? (ms < 10 ? '00' + ms : '0' + ms) : '' + ms;
        return minStr + ':' + secStr + '.' + msStr;
    },
    fetchTimeNum(timeStr) {
        switch (timeStr) {
            case 'jan':
            case 'january':
                return 1;
            case 'feb':
            case 'february':
                return 2;
            case 'mar':
            case 'march':
                return 3;
            case 'apr':
            case 'april':
                return 4;
            case 'may':
                return 5;
            case 'jun':
            case 'june':
                return 6;
            case 'jul':
            case 'july':
                return 7;
            case 'aug':
            case 'august':
                return 8;
            case 'sep':
            case 'september':
                return 9;
            case 'oct':
            case 'october':
                return 10;
            case 'nov':
            case 'november':
                return 11;
            case 'dec':
            case 'december':
                return 12;
            case 'mon':
            case 'monday':
                return 1;
            case 'tue':
            case 'tuesday':
                return 2;
            case 'wed':
            case 'wednesday':
                return 3;
            case 'thr':
            case 'thursday':
                return 4;
            case 'fri':
            case 'friday':
                return 5;
            case 'sat':
            case 'saturday':
                return 6;
            case 'sun':
            case 'sunday':
                return 7;
        }
    },
};
