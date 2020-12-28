
import React, {useEffect, useState} from 'react';

export function Clock(){


    const [date, setDate]=useState(new Date())

    const gett2DigitalsString =(num: number)=>num <10 ? '0'+ num: num

    useEffect(()=>{

        const inrevalId=setInterval(()=>{
            console.log('tic')
            setDate(new Date())
        },1000)

       return()=>{
            clearInterval(inrevalId)
         }

    },[])

    let onStyle = {
        width: "100px",
        height: "100px",
        borderRadius: "50px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        marginLeft: "2px",
        //backgroundColor: on ? "green" : "white"
    }




    return<>
        <div style={onStyle}></div>

        <span>{gett2DigitalsString(date.getHours())}</span>
        :
        <span>{gett2DigitalsString(date.getMinutes())}</span>
        :
        <span>{gett2DigitalsString(date.getSeconds())}</span>

        </>

}