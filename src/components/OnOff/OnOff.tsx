import React from 'react';

export type OnOffPropsType = {
    on: boolean
    onChange:(on:boolean)=>void

}


export const OnOff = (props: OnOffPropsType) => {

    const onClicked = () =>{props.onChange(true);}
    const offClicked = () => {props.onChange(false);}

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1 px solid black',
        display: 'inline-block',
        backgroundColor: props.on ? 'green' : 'white'
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1 px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        backgroundColor: props.on ? 'white' : 'red'
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'
    };

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>
                On
            </div>
            <div style={offStyle} onClick={offClicked}>
                Off
            </div>
            <div style={indicatorStyle}></div>
        </div>

    )
        ;
};


