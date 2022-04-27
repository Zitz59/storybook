import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating, {RatingValueType} from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import UncontrolledRating from './components/UncontrolledRating/UncontrolledRating';
import UncontrolledOnOff from './components/OnOff/UncontrolledOnOff';

function App() {
    console.log('App rendering')

    let [ratingValue,setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed,setAccordionCollapsed] = useState<boolean>(false)
    let[switchOn,setSwitchOn] = useState(false);
    let menuTitle = 'User'

    return (

        <div className="App">
            <Accordion titleValue={menuTitle} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <OnOff on={switchOn} onChange={(on)=>{setSwitchOn(on)}}/>
            <UncontrolledAccordion titleValue = {"Menu"}/>
            <UncontrolledAccordion titleValue = {"Users"}/>
            <UncontrolledRating/>
            <UncontrolledOnOff/>
        </div>
    );
}


export default App;
