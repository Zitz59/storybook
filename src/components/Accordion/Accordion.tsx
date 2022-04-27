import React from 'react';

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick:(collapsed:boolean)=>void

}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
        return <div>
            <AccordionTitle titleValue={props.titleValue} onClick={props.onClick} collapsed={props.collapsed}/>
            {!props.collapsed  && <AccordionBody/>}
        </div>

}

function AccordionTitle(props: AccordionPropsType) {
    console.log('AccordionTitle rendering')
    debugger
    {
        return (

            <h3 onClick={()=>{props.onClick(!props.collapsed)}}>-- {props.titleValue} --</h3>
        )
    }
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return <ul >
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}


export default Accordion;