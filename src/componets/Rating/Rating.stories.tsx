import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Rating, {RatingValue} from "./Rating";

export default {
    title: 'Rating',
    component: Rating,
} as Meta;

export const Ratings: Story<any> = () => <Rating onClick={x=>x} value={0} />;
export const Rating1: Story<any> = () => <Rating onClick={x=>x} value={1} />;
export const Rating2: Story<any> = () => <Rating onClick={x=>x} value={2} />;
export const Rating3: Story<any> = () => <Rating onClick={x=>x} value={3} />;
export const Rating4: Story<any> = () => <Rating onClick={x=>x} value={4} />;
export const Rating5: Story<any> = () => <Rating onClick={x=>x} value={5} />;
export const ChangeRating: Story<any> = () => {
   const [rating, setRating] =useState<RatingValue>(0)

    return<Rating onClick={setRating} value={rating} />;
}


