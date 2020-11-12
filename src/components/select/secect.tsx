import React from "react";

type itemType={
    title: string
    value: any
}
type SelectPropsType={
    value: any
    onChange: (value: any)=> void
    items: Array<itemType>
}


function Select(props: SelectPropsType){
return(
    <div>
        <div>{props.items.find(i => i.value = value)}</div>
        {props.items.map(i => <div>{i.title}</div>)}
    </div>
)
}








