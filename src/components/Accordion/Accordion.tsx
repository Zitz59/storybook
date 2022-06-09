import React from 'react';

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick:(collapsed:boolean)=>void

}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
        return <div>
            <AccordionTitle titleValue={props.titleValue} onClick={props.onClick} collapsed={props.collapsed}/>
            {!props.collapsed  && <AccordionBody/>}
        </div>

}

function AccordionTitle(props: AccordionPropsType) {
    console.log('AccordionTitle rendering')
const onExpanded = () => {props.onClick(!props.collapsed)}
    
    
    
    {
        return (
            <h3 onClick={onExpanded}>-- {props.titleValue} --</h3>
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


