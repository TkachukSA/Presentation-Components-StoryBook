import React, {useState} from "react";

type Onofftype = {
    on: boolean
    onChange: (on: boolean) => void

}

function OnOff2(props:Onofftype) {



    let onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        marginLeft: "2px",
        backgroundColor: props.on ? "green" : "white"
    }
    let offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        marginLeft: "5px",
        backgroundColor: props.on? "white" : "red"
    }
    let indicatorStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "10px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: props.on  ? "green" : "red"
    }


 return <div> <div style={onStyle} onClick={ ()=> {props.onChange(true)}}>on</div>
             <div style={offStyle} onClick={ ()=> {props.onChange(false)}}>off</div>
             <div style={indicatorStyle}></div>
 </div>
}



export default OnOff2
