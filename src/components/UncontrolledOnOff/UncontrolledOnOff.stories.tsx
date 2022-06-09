import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff}  from "./UncontrolledOnOff";


export default {
    title:'UncontrolledOnOff',
    component:UncontrolledOnOff
};
const callBack = action('clicked')
export const onMode = () => <UncontrolledOnOff  defaultOn={true} onChange={callBack}/>
export const offMode = () => <UncontrolledOnOff defaultOn={false}  onChange={callBack}/>