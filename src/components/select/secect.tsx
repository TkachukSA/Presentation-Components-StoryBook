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

/*

export function Select(props: SelectPropsType){
return(
    <div>
        <div onClick={()=>props.onChange}>{props.items.find(i => i.value == props.value)}</div>
        {props.items.map(i => <div>{i.title}</div>)}
    </div>
)
}
*/
type  xxx = {collapsed: boolean}
export function Select(props: xxx){
    return(
        <div>

            <div>xxx</div>


                <div>yyy</div>
                <div>zzz</div>
                <div>qqq</div>

        </div>)}








