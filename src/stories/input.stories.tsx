import {ChangeEvent, useRef, useState} from 'react';
import {Simulate} from 'react-dom/test-utils';
import input = Simulate.input;

export default {
    title: 'input'
}

export const UncontrolledInput = () => {
    <input/>
};

export const ControlledInputWithFixedValue = () => {
    <input value={'it-incubator.by'}/>
}


export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value;
        setValue(actualValue);

        return <><input onChange={onChangeHandler} value={value}/></>
    }
}

export const GetValueUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <><input/>
        <button onClick={save}>save</button>
        - actual value:{value}</>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChangeHAndler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChangeHAndler}/>
}

export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChangeHAndler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type="checkbox" checked={parentValue} onChange={onChangeHAndler}/>

}


export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChangeHAndler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChangeHAndler}>
        <option>None</option>
        <option value="1">Minsk</option>
        <option value="2">Moscow</option>
        <option value="3">Kiev</option>
    </select>
}
