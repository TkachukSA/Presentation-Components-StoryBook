import React, {ChangeEvent, useRef, useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import {Header, HeaderProps} from './Header';

export default {
    title: 'Example/Header',
    component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};

export const Input: Story = () => {

    const [value, setValue] = useState("")

    const change = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return <> <input onChange={change}/> <>{value}</>
    </>
}

export const InputRef: Story = () => {
    const [value, setValue] = useState("")
    const inpref = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inpref.current as HTMLInputElement
        setValue(el.value)
    }

    return <> <input ref={inpref} id={"inpitid"}/>
        <button onClick={save
        }/>
        <>{value}</>
    </>
}

export const Controledinput: Story = () => {

const [value, setValue]=useState("")

const onChange =(e: ChangeEvent<HTMLInputElement>)=>
{setValue(e.currentTarget.value)}
return<> <input value={value} onChange={onChange}/>
</>
}

export const Controledchecbox: Story = () => {

    const [chacked, setValue]=useState(true)

    const onChange =(e: ChangeEvent<HTMLInputElement>)=>
    {setValue(e.currentTarget.checked)}
    return<> <input type="checkbox" checked={chacked} onChange={onChange}/>
    </>
}

export const Controledcelect: Story = () => {

    const [chacked, setValue]=useState<string| undefined>("1")

    const onChange =(e: ChangeEvent<HTMLSelectElement>)=>
    {setValue(e.currentTarget.value)}


    return <select value={chacked} onChange={onChange}>
        <option value={"1"} >Minsk</option>
        <option value={"2"}>Kiev</option>
        <option value={"3"}>Moscow</option>
    </select>
}

