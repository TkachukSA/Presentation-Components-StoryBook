import React, {ChangeEvent, useMemo, useRef, useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';


export default {
    title: 'UseMemo',

} as Meta;


export const Example1 = ()=> {

    let [a, setA] = useState<number>(5)
    let [b, setB] = useState<number>(5)
    let resA = 1
    let resB = 1

   resA=useMemo(()=>{
       let tenpResA = 1
       for (let i =1; i<=a; i++){
           let face = 0
           while (face<10000000){
               face++
               const fakewalue= Math.random()
           }
           tenpResA= tenpResA*i
       }

    return   tenpResA
},[a])

    for (let i =1; i<=b; i++) {
        resB = resB * i
    }

    return<>
<input value={a} onChange={(e)=>setA(+e.currentTarget.value)} />
<input value={b} onChange={(e)=>setB(+e.currentTarget.value)} />
<hr/>

        <div> res a {resA}</div>
        <div> res b {resB}</div>

        </>

}








function NewMessageCounter(props: {counter: number}){
    return <div>{props.counter}</div>
}

function UsersSecret(props: {users: string[]}){
    console.log("users")
    return <div>{
        props.users.map((o,i)=><div key={i}>{o}</div>
        )}
    </div>
}

const USERS=React.memo(UsersSecret)
export function HelpsToReactMemo(props: {counter: number}){
    console.log('helps')
    const [users, setUsers]=useState(["`Nastya", "Sergey", "Solid"])
    const [counter, setSetcounter]=useState(0)

    const newarray =useMemo(()=>{
        return users.filter(u=>u.toLowerCase().indexOf('a')> -1)},[users])

    return <>
        <button onClick={()=>{setSetcounter(counter+1)}}>+</button>

        {counter}
        <USERS users={newarray}/>

    </>
}

















