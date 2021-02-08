import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';


import {action} from "@storybook/addon-actions";
import OnOff from "./onOff";



export default {
    title: 'onOff no controled',
    component: OnOff,
} as Meta;

export const OnBottom: Story<any> = () =><OnOff defaulValue={true}/>;
export const OffBottom: Story<any> = () =><OnOff defaulValue={false}/>;








