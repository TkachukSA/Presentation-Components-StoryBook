import React from "react";


type itemType = {
    title: string
    value: any
}

export type AccardionProopsType = {
    titleValve: string
    collapsed: boolean
    onClick: () => void
    item: Array<itemType>
    onClickTitle: (value: any) => void
}


function AccordionCntroled(props: AccardionProopsType) {
    console.log("Accordion Reading")
    return (<div>
            <AccordionTitle title={props.titleValve} onClick={props.onClick}/>
            {!props.collapsed && <AccordionBody onClickTitle={props.onClickTitle} item={props.item}/>}

        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void

}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h2 onClick={(e) => props.onClick()}>---{props.title} --</h2>
    )
}


type AccordionBodyType = {
    item: Array<itemType>
    onClickTitle: (value: any) => void
}

function AccordionBody(props: AccordionBodyType) {

    return <ul>
        {
            props.item.map((i, index) => <li onClick={() => {
                props.onClickTitle(i.value)
            }} key={index}>{i.title}</li>)
        }
    </ul>


}

export default AccordionCntroled;




