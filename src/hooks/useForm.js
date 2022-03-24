import { useState } from "react"


export const useForm = (initialState = {}) => {

    //console.log(initialState.categoria)

    const [values, setValues] = useState(initialState);


    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = (event) => {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setValues({
            ...values,
            [name]: value
        });

    }

    return [values, handleInputChange, reset];

}
