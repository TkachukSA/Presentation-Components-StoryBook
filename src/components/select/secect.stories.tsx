import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';


import {action} from "@storybook/addon-actions";
import {Select} from "./secect";


export default {
    title: 'Select',
    component: Select,
} as Meta;

export const Selectcolapsed: Story<any> = () => {
    const [value, setvalue]=useState(0)


    return (
        < Select
            onClick={setvalue}
            value={value}
            items={[
                {title: "Serey", value: 1},
                {title: "Nastia", value: 2},
                {title: "Denis", value: 3},
                {title: "boby", value: 3}
            ]}/>)
}





