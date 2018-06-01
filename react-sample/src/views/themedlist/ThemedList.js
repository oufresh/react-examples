//@flow
import React from 'react';
import withTheme from '../theme/withTheme';
import './ThemedList.css';

type Props = {
    theme?: string,
    elements?: []
};

const List = (props: Props) => {
    return (
        <ul className={'themed-list ' + (props.theme ? props.theme : '')}>
            {
               // (props.elements ? 
                    props.elements.map((el) => {
                        return <li key={el.toString()}>{el}</li>;})
                //  : null)
            }
        </ul>
    );
};

const ThemedList = withTheme(List);
export default ThemedList;