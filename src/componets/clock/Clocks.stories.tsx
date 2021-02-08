import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import {Clocks} from "./Clocks";


export default {
    title: 'Clock',
    component: Clocks,
} as Meta;


export const EletrClock: Story<any> = () => {

    return <Clocks mode={'electr'}/>;
}

export const AnalogClock: Story<any> = () => {

    return <Clocks mode={'Analog'}/>;
}