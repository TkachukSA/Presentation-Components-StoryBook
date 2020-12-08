import React, {useReducer, useState} from "react";
import {reducer} from "./reducer";


type AccardionProopsType = {
    titleValve: string

}

function Accardion2(props: AccardionProopsType) {

  //  let [collapded, setOn] = useState(false)

    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return <div>
        <AccordionTitle title={props.titleValve} OnClick={() => {
            dispatch({type: "Togl-Colapsed"})
        }}/>

        {!state.collapsed && <AccordionBody/>}

    </div>

}

type AccordionTitlePropsType = {
    title: string
    OnClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h2 onClick={() => {
            props.OnClick()
        }}>---{props.title} --</h2>

    )
}

function AccordionBody() {
    console.log("Accordionbody reandaring")
    return (
        <ul>
            <ol>1</ol>
            <ol>2</ol>
            <ol>3</ol>
        </ul>
    )
}

export default Accardion2;




