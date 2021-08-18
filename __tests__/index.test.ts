import { jsAssist } from '../src';

test('test rand', () => {
  expect(jsAssist.numberUtil.randNum(0, 10)).toBe(1);
});
