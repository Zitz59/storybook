import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion} from './Accordion';


export default {
    title: 'Accordion',
    component: Accordion
};
const callBack = action('accordion mode change event fired')
const onClickCallBack = action('some item was clicked')

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callBack} items={[]}
                                                  onClick={onClickCallBack}/>
export const UsersUnCollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false} onChange={callBack}
                                                     items={[{title: 'Kamu', value: 1},
                                                         {title: 'Unger', value: 2},
                                                         {title: 'Kafka', value: 3},
                                                         {title: 'Sartr', value: 4}]}
                                                     onClick={onClickCallBack}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false);
    return <Accordion titleValue={'Users'} collapsed={value} onChange={() => setValue(!value)}
                      items={[{title: 'Kamu', value: 1},
                          {title: 'Unger', value: 2},
                          {title: 'Kafka',value: 3},
                          {title: 'Sartr', value: 4}]}
                      onClick={onClickCallBack}/>
};