import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Select} from './Select';


export default {
    title: 'Select',
    component: Select
};
const callBack = action('value changed')
// const onClickCallBack = action('some item was clicked')

export const WithValue = () => {

    const [value, setValue] = useState('2')
    return <>
        <Select onChange={setValue}
                value={value}
                items={[{value: '1', title: 'Intel'},
                    {value: '2', title: 'Nvidia'},
                    {value: '3', title: 'AMD'}]}/>

    </>
}

export const withoutValue = () => {
    const [value,setValue] = useState(null)
    return <>
        <Select value={null}
            items={[{value: '1', title: 'Intel'},
            {value: '2', title: 'Nvidia'},
            {value: '3', title: 'AMD'}]}
                onChange={setValue}/>
    </>
}

// export const UnCollapsedMode = () => <Select value={2} items={[{value: 1, title: 'Intel'},
//     {value: 2, title: 'Nvidia'},
//     {value: 3, title: 'Microsoft'}]}
//
// onChange={callBack}/>
//
// export const ModeChanging = () => {
//     const [value, setValue] = useState<boolean>(false);
//     return <Select value={value} onChange={() => setValue(!value)}
//                     items={[{value: 1, title: 'Intel'},
//                         {value: 2, title: 'Nvidia'},
//                         {value: 3, title: 'Microsoft'}]}
//                    />
// };

