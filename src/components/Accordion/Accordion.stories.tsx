import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
    title:'Accordion',
    component:Accordion
};
const callBack = action('accordion mode change event fired')
export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true}  onClick={callBack}/>
export const UsersUnCollapsedMode = () => <Accordion titleValue={"Users"}  collapsed={false} onClick={callBack}/>

export const ModeChanging = () => {
    const  [value,setValue]= useState<boolean>(false);
    return <Accordion titleValue={"Users"} collapsed={value} onClick={()=>setValue(!value)}/>
}