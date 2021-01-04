
import React, {useEffect, useState} from 'react';



export type ClockType={
    date: Date
}

export const ElectrClock: React.FC<ClockType>=({date})=>{

   /* const [date, setDate]=useState(new Date())




    useEffect(()=>{

        const inrevalId=setInterval(()=>{
            console.log('tic')
            setDate(new Date())
        },1000)

        return()=>{
            clearInterval(inrevalId)
        }

    },[])*/


    const gett2DigitalsString =(num: number)=>num <10 ? '0'+ num: num

    return<>


        <span>{gett2DigitalsString(date.getHours())}</span>
        :
        <span>{gett2DigitalsString(date.getMinutes())}</span>
        :
        <span>{gett2DigitalsString(date.getSeconds())}</span>

    </>

}