import React, {useState} from 'react';
import './App.css';


import Accardion from "./components/accordion/accordion";
import Rating, {RatingValue} from "./componets/Rating/Rating";
import OnOff from "./componets/onOff"

import Rating2 from "./componets/Rating/Rating2";
import OnOff2 from "./componets/onOff2";
import {on} from "cluster";

const App = () => {
    let [ratingvalue, SetValue] = useState<RatingValue>(0)
    let [AccordionCollapsed, SetAccordionCollapsed] = useState<boolean>(true)


    let [TestOnOff, SetOnOff] = useState(true)

    return <div>


        <OnOff2 on={TestOnOff} onChange={(on) => {SetOnOff(on)
        }}/>

        {/*<Accardion titleValve={"hhr"} collapsed={AccordionCollapsed} onClick={() => {
            SetAccordionCollapsed(!AccordionCollapsed)
        }} item={["1", "2"]} />*/}


        <Rating onClick={SetValue} value={ratingvalue}/>
        <OnOff/>

    </div>;
}
type PageTitleProopsType = {
    title: string
}

function PegeTitle(props: PageTitleProopsType) {
    console.log("Star Rendering")
    return <h1>{props.title}</h1>


}


export default App;

