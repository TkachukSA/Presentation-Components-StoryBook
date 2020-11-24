import React, {useReducer} from "react";
import {reducer, togl} from "./reducer";

type AccardionProopsType = {
    titleValve: string

}

function Accardion2(props: AccardionProopsType) {

    /* let [collapded, setOn] = useState(false)*/





    let [collapded, dispatch] = useReducer(reducer, {collapsed: false})

    return (<div>
            {/*<AccordionTitle title={props.titleValve} OnClick={() => {
                setOn(!collapded)}}/>*/}
            <AccordionTitle title={props.titleValve} OnClick={() => {
                dispatch({type: togl})
            }}/>

            {!collapded && <AccordionBody/>}

        </div>
    )
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




