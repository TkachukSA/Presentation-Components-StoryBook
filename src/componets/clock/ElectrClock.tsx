
import React from 'react';



export const ElectrClock: React.FC<{ date: Date }>=({date})=>{

    const gett2DigitalsString =(num: number)=>num <10 ? '0'+ num: num




    return<>

        <span>{gett2DigitalsString(date.getHours())}</span>
        :
        <span>{gett2DigitalsString(date.getMinutes())}</span>
        :
        <span>{gett2DigitalsString(date.getSeconds())}</span>

    </>

}