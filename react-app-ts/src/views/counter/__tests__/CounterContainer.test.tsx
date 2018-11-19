import * as enzyme from 'enzyme';
import * as React from 'react';
import { CounterContainer } from '../CounterContainer';

describe('CounterContainer test suite', () => {
    it('CounterContainer render without crash', () => {
        const inc = jest.fn(()=> ({}));
        const dec = jest.fn(()=> ({}));
        const counter = enzyme.shallow(<CounterContainer name={'prova'} onIncrement={inc} onDecrement={dec} counter={5} />);
        expect(counter).not.toBeNull();
    });
});