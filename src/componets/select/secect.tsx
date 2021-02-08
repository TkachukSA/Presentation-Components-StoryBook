import React, {useState} from "react";
import s from "./secect.module.css"

type itemType = {
    title: string
    value: any
}
type SelectPropsType = {
    value?: any
    onClick: (value: any) => void
    items: Array<itemType>
}


export function Select(props: SelectPropsType) {
    const select = props.items.find(i => i.value == props.value)
    const [active, setActive] = useState(false)
    const [hovored, setHovored] = useState(props.value)
    const hovoreditem = props.items.find(i => i.value == hovored)
    const togl = () => {
        setActive(!active)
    }
    return (
        <>
            <select>
                <option>msk</option>
                <option>minsk</option>
                <option>origon</option>
            </select>

            <div className={s.select}>

        <span className={s.main} onClick={togl}>
            {select && select.title}</span>

                {active &&
                <div className={s.items} onKeyUp={(e) => {
                }} tabIndex={0}>
                    {props.items.map(i => <div
                        className={s.item + " " + (hovoreditem === i ? s.select : " ")}
                        onClick={() => {
                            props.onClick(i.value);
                            togl()
                        }}
                        onMouseEnter={() => {
                            setHovored(i.value)
                        }}
                        key={i.value}
                    >{i.title}
                    </div>)}

                </div>
                }
            </div>
        </>
    )
}








