import React, {useState} from 'react';
import './App.css';
import OnOff2 from "./componets/OnOffButton/onOff2";
import RatingControled, {RatingValue} from "./componets/Rating/RatingControled";


const App = () => {
    let [ratingvalue, SetValue] = useState<RatingValue>(0)
    let [TestOnOff, SetOnOff] = useState(true)

    return <div>
        <OnOff2 on={TestOnOff} onChange={(on) => {SetOnOff(on)}}/>
        <RatingControled onClick={SetValue} value={ratingvalue}/>
    </div>;
}


export default App;

