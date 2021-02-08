import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta} from '@storybook/react/types-6-0';


export default {
    title: 'useState',

} as Meta;

function generationData() {
    console.log('generationData')
    return 2
}


export const Example1 = () => {
    let [counter, setCounter] = useState(generationData)

    const changed = (state: number) => {
        return counter + 1
    }
    return <>


        <button onClick={() => {
            setCounter(changed)
        }}/>
        {counter}
    </>
}



















