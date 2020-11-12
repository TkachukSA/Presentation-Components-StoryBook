import React, {useState} from "react";

type AccardionProopsType = {
    titleValve: string

}


function Accardion2(props: AccardionProopsType) {

    let [collapded, setOn] = useState(false)


    return (<div>
            <AccordionTitle title={props.titleValve} OnClick={() => {
                setOn(!collapded)}}/>

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




