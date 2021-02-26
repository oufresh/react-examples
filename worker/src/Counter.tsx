import * as React from 'react';

export const Counter = ({count}:{count: number | null}) =>
{
    return  <p>Count: {count != null ? count : ""}</p>
}