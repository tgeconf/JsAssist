import { jsAssist } from "..";

test('test rand', ()=>{
    expect(jsAssist.mathUtil.randNum(0, 10)).toBe(1);
})