import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';



import {action} from "@storybook/addon-actions";
import Accardion2 from "./accordion2";



export default {
    title: 'Accordion on controled',
    component: Accardion2,
} as Meta;

export const AccordionColapsed: Story<any> = () => <Accardion2 titleValve={"menu"}/>;





