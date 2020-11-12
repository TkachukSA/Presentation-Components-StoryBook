import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import  {RatingValue} from "./Rating";
import Rating2 from "./Rating2";

export default {
    title: 'Rating no controled',
    component: Rating2,
} as Meta;

export const Rtings0: Story<any> = () => <Rating2  defaultValue={0}/>;
export const Rtings1: Story<any> = () => <Rating2  defaultValue={1}/>;
export const Rtings2: Story<any> = () => <Rating2  defaultValue={2}/>;
export const Rtings3: Story<any> = () => <Rating2  defaultValue={3}/>;
export const Rtings4: Story<any> = () => <Rating2  defaultValue={4}/>;
export const Rtings5: Story<any> = () => <Rating2  defaultValue={5}/>;

