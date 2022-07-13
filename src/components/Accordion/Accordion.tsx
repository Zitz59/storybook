import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: (collapsed: boolean) => void
    items: ItemType[]
    onClick:(value:any)=>void
}

type AccordionTitlePropsType = {
    titleValue: string
    onChange: (collapsed: boolean) => void

}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick:(value:any)=>void
}


type ItemType = {
    title:string
    value:any
}



export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    return <div>
        <AccordionTitle titleValue={props.titleValue} onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>

}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    const onExpanded = () => {props.onChange(!props.onChange)}
    return (
        <h3 onClick={onExpanded}>-- {props.titleValue} --</h3>
    )

}



function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    return <ul>{props.items.map((i,index) => <li onClick={()=>{props.onClick(i.title)}} key={index }>{i.title}</li>)}</ul>
}


