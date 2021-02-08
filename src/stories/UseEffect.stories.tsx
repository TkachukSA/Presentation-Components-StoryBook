import React, {useEffect,useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta} from '@storybook/react/types-6-0';


export default {
    title: 'UseEffect',

} as Meta;




export const UseEffect = ()=> {
    let [counter, setCounter]=useState(0)
    let [face, setFace]=useState(0)

    console.log('useeffect')
   useEffect(()=>{
       setInterval(()=>{
           setCounter(state=> state+1)
       },1000)
   },[])
    return <>

  counter:  {counter}
  face: {face}
    </>
}


export const UseEffectClockMain = ()=> {
    let [counter, setCounter]=useState<Date>()


    console.log('useeffect')
    useEffect(()=>{
        setInterval(()=>{
            setCounter(new Date())
        },1000)
    },[])
    return <>

        Time:  {counter?.getHours()}:{counter?.getMinutes()}:{counter?.getSeconds()}

    </>
}


export  function Footer() {

    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => setDateTime(new Date()), 1000);
        return () => {
            clearInterval(id);
        }
    }, []);
    return (
        <>
            {dateTime.toDateString()}
        </>
    );
}



















