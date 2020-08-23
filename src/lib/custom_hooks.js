import { useState } from 'react';

export function useArrayState(defaultSingleValue) {
    const [values, setValues] = useState([]);

    const addValue = (value = defaultSingleValue) => setValues([...values, value]);

    const removeValue = index => setValues(values.filter((_, i) => index !== i));

    const editValue = (index, newValue) => {
        values[index] = newValue;
        setValues([...values]);
    };

    return [values, addValue, removeValue, editValue];
};
