import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {OnOff} from "./OnOff";


export default {
    title:'OnOff',
    component:OnOff
};
const callBack = action('clicked')
export const onMode = () => <OnOff on={true}  onChange={callBack}/>
export const offMode = () => <OnOff on={false}  onChange={callBack}/>

export const ModeChanging = () => {
    const  [value,setValue]= useState<boolean>(false);
    return <OnOff on={value} onChange={setValue}/>
}