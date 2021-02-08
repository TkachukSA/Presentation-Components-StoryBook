import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import RatingNoControled from "./RatingNoControled";




export default {
    title: 'RatingControled no controled',
    component: RatingNoControled,
} as Meta;

export const Rtings0: Story<any> = () => <RatingNoControled defaultValue={0}/>;
export const Rtings1: Story<any> = () => <RatingNoControled defaultValue={1}/>;
export const Rtings2: Story<any> = () => <RatingNoControled defaultValue={2}/>;
export const Rtings3: Story<any> = () => <RatingNoControled defaultValue={3}/>;
export const Rtings4: Story<any> = () => <RatingNoControled defaultValue={4}/>;
export const Rtings5: Story<any> = () => <RatingNoControled defaultValue={5}/>;

