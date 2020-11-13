import React, {useState} from "react";
import s from "./secect.module.css"

type itemType={
    title: string
    value: any
}
type SelectPropsType={
    value?: any
    onClick: (value: any)=> void
    items: Array<itemType>
}


export function Select(props: SelectPropsType){
    const select = props.items.find(i => i.value == props.value)
    const [active, setActive]=useState(false)
const togl= ()=>{setActive(!active)}
return(
    <>
    <select>
        <option>msk</option>
        <option>minsk</option>
        <option>origon</option>
    </select>

    <div className={s.select}>

        <span className={s.main} onClick={togl} >{select && select.title}</span>
        {active&&
        <div  className={s.item}>
        {props.items.map(i => <div onClick={()=>{props.onClick(i.value); togl()}} key={i.value}>{i.title}</div>)}
        </div>}
    </div>
        </>
)
}








