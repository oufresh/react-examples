import { dec, inc } from '../reducer';
import { initialValue } from '../types';

test('inc', () => {
    const ret = inc(initialValue);
    expect(ret).toEqual({ value: initialValue.value+1});
});

test('dec', () => {
    const ret = dec(initialValue);
    expect(ret).toEqual({ value: initialValue.value-1});
});