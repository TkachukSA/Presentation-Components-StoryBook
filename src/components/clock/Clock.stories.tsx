import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import {action} from "@storybook/addon-actions";
import {Clock} from "./Clock";



export default {
    title: 'Clock',
    component: Clock,
} as Meta;



export const EletrClock: Story<any> = () => {

    return<Clock mode={'electr'}/>;
}

export const AnalogClock: Story<any> = () => {

    return<Clock mode={'Analog'}/>;
}