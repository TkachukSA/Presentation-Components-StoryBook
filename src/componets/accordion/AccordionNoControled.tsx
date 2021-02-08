import React, {useReducer} from "react";
import {reducer} from "./reducer";





function AccordionNoControled(props: { titleValve: string }) {


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
        <h2 onClick={() => {props.OnClick()}}>---{props.title} --</h2>
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

export default AccordionNoControled;




