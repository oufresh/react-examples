import * as enzyme from 'enzyme';
import * as React from 'react';
import { CounterComponent } from '../CounterComponent';

/*
    Why you shouldn't use inline arrow functions in JSX props
    Using arrow functions or binding in JSX is a bad practice that hurts performance, because the function is recreated on each render.
    Whenever a function is created, the previous function is garbage collected. Rerendering many elements might create jank in animations.
    Using an inline arrow function will cause PureComponents, and components that use shallowCompare in the shouldComponentUpdate method to rerender anyway.
    Since the arrow function prop is recreated each time, the shallow compare will identify it as a change to a prop, and the component will rerender.
*/
describe('CounterComponent test suite', () => {
    it('CounterComponent render without crash', () => {
        // const counter = enzyme.shallow(<CounterComponent title={'prova'} value={5} onIncrement={() => {}}/>);
        const inc = () => undefined;
        const dec = () => undefined;
        const counter = enzyme.shallow(<CounterComponent title={'prova'} value={5} onIncrement={inc} onDecrement={dec} />);
        expect(counter.find("h1").text()).toEqual('prova');
    });
});