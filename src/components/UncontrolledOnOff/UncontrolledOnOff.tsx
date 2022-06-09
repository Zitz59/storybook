import React, {useState} from 'react';

type PropsType = {
    onChange:(on:boolean)=>void
    defaultOn?:boolean
}

export const UncontrolledOnOff = (props:PropsType) => {

   let[on,setOn] = useState(props.defaultOn? props.defaultOn : false);

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1 px solid black',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'white'
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1 px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        backgroundColor: on ? 'white' : 'red'
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    };

    return (
        <div>
            <div style={onStyle} onChange={() => {
                setOn(true) ;
            }}>On
            </div>
            <div style={offStyle} onChange={() => {
                setOn(false) ;
            }}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>

    )
        ;
};
