import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import OnOff2 from "./onOff2";
import Rating, {RatingValue} from "./Rating/Rating";
import {action} from "@storybook/addon-actions";



export default {
    title: 'onOff2',
    component: OnOff2,
} as Meta;

export const OnBottom: Story<any> = () => <OnOff2 onChange={action('click')} on={true}/>;
export const offBottom: Story<any> = () => <OnOff2 onChange={action('click')} on={false}/>;

export const ChangeOnOff: Story<any> = () => {
    const [on, setOn] =useState<boolean>(false)
    return<OnOff2 on={on} onChange={setOn} />;
}




