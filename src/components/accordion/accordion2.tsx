import React, {useReducer, useState} from "react";

type AccardionProopsType = {
    titleValve: string

}


function Accardion2(props: AccardionProopsType) {

    /* let [collapded, setOn] = useState(false)*/

    type actionType = {
        type: string
    }


    const Reducer = (state: boolean, action: actionType) => {
        console.log(state)
        if (action.type === "Togl-Colapsed") {
            return !state
        }

        return state
    }
    let [collapded, dispatch] = useReducer(Reducer, false)

    return (<div>
            {/*<AccordionTitle title={props.titleValve} OnClick={() => {
                setOn(!collapded)}}/>*/}
            <AccordionTitle title={props.titleValve} OnClick={() => {
                dispatch({type: "Togl-Colapsed"})
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




