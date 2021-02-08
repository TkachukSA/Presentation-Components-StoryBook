import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';


import {action} from "@storybook/addon-actions";
import AccordionCntroled from "./AccordionCntroled";


export default {
    title: 'Accordion',
    component: AccordionCntroled,
} as Meta;
const onClickCollBack = action('some item was clicket')

export const AccordionColapsed: Story<any> = () => <AccordionCntroled onClick={action("click")} collapsed={true}
                                                                      titleValve={"touch me"} item={[{
    title: "Serey",
    value: 1
}, {title: "Nastia", value: 2}, {title: "Denis", value: 3}]} onClickTitle={onClickCollBack}/>;
export const AccordionNoColapsed: Story<any> = () => <AccordionCntroled onClick={action("click")} collapsed={false}
                                                                        titleValve={"touch me"} item={[{
    title: "Serey",
    value: 1
}, {title: "Nastia", value: 2}, {title: "Denis", value: 3}]} onClickTitle={onClickCollBack}/>;
export const ChangeAccordio: Story<any> = () => {
    const [value, setValue] = useState(true)
    return <AccordionCntroled onClick={() => {
        setValue(!value)
    }}
                              collapsed={value}
                              titleValve={"touch me"}
                              item={[{title: "Serey", value: 1}, {title: "Nastia", value: 2}, {
                                  title: "Denis",
                                  value: 3
                              }]}
                              onClickTitle={onClickCollBack}/>;
}





