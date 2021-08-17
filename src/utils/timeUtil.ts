export const timeUtils = {
    /**
     * translate time in ms to mm:ss.ms
     * @param time 
     * @returns 
     */
    formatTime(time: number) {
        const minute: number = Math.floor(time / 60000);
        const second: number = Math.floor((time - minute * 60000) / 1000);
        const ms: number = Math.floor((time - minute * 60000 - second * 1000) / 1);
        const minStr: string = minute < 10 ? '0' + minute : '' + minute;
        const secStr: string = second < 10 ? '0' + second : '' + second;
        const msStr = ms < 100 ? (ms < 10 ? '00' + ms : '0' + ms) : '' + ms;
        return minStr + ':' + secStr + '.' + msStr;
    },
}