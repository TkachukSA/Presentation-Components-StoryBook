import React, {useState} from "react";

type OnOffType ={
    defaulValue?: boolean
}

function OnOff(props: OnOffType) {

    let [on, setOn] = useState(props.defaulValue)





    let onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        marginLeft: "2px",
        backgroundColor: on ? "green" : "white"
    }
    let offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        marginLeft: "5px",
        backgroundColor: on ? "white" : "red"
    }
    let indicatorStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "10px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: on ? "green" : "red"
    }


 return <div> <div style={onStyle} onClick={ () => {setOn(true)}}>on</div>
             <div style={offStyle} onClick={ () => {setOn(false)}}>off</div>
             <div style={indicatorStyle}></div>
 </div>
}



export default OnOff