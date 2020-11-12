import React from "react";
import {RatingValue} from "../../componets/Rating/Rating";

export type AccardionProopsType = {
    titleValve: string
    collapsed: boolean
    onClick: () => void
}


function Accardion(props: AccardionProopsType) {
    console.log("Accordion Reading")
    return (<div>
            <AccordionTitle title={props.titleValve} onClick={props.onClick}  />
            {!props.collapsed && <AccordionBody/>}

        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void

}
function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h2 onClick={(e)=>props.onClick()}>---{props.title} --</h2>
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

export default Accardion;




