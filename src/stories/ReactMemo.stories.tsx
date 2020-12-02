import React, {ChangeEvent, useRef, useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';


export default {
    title: 'ReactMemo',

} as Meta;


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

export function Example1(props: {counter: number}){
    const [users, setUsers]=useState(["`Nastya", "Sergey", "Solid"])
    const [counter, setSetcounter]=useState(0)

    const addusers=()=>{
        const newUsers= [...users, "Bon" + new Date().getTime() ]
        setUsers(newUsers)
    }
    users.push("Bon" + new Date().getTime())


    return <>
        <button onClick={()=>{setSetcounter(counter+1)}}>+</button>
        <button onClick={addusers}>add</button>
        <NewMessageCounter counter={counter}/>
        <USERS users={users}/>

        </>
}









