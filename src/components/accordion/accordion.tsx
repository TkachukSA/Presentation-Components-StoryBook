import React from "react";
import {RatingValue} from "../../componets/Rating/Rating";

export type AccardionProopsType = {
    titleValve: string
    collapsed: boolean
    onClick: () => void
    item: Array<string>
}


function Accardion(props: AccardionProopsType) {
    console.log("Accordion Reading")
    return (<div>
            <AccordionTitle title={props.titleValve} onClick={props.onClick}  />
            {!props.collapsed && <AccordionBody item={props.item}/>}

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


type AccordionBodyType={item: Array<string> }
function AccordionBody(props: AccordionBodyType) {

return ( <ul>
        {
            props.item.map((i, index) => <li key={index}>{i}</li>)
        }
    </ul>
)

}

export default Accardion;




