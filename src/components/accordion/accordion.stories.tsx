import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';



import {action} from "@storybook/addon-actions";
import Accardion from "./accordion";



export default {
    title: 'Accordion',
    component: Accardion,
} as Meta;

export const AccordionColapsed: Story<any> = () => <Accardion onClick={action("click")} collapsed={true} titleValve={"touch me"}/>;
export const AccordionNoColapsed: Story<any> = () => <Accardion onClick={action("click")} collapsed={false} titleValve={"touch me"}/>;
export const ChangeAccordio: Story<any> = () => {
    const [value, setValue] =useState(true)
    return<Accardion onClick={()=>{setValue(!value)}} collapsed={value} titleValve={"touch me"}/>;
}





