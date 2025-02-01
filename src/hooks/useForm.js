import React from 'react';

export const useForm = (initialState) => {
    const [ formValues, setFormValues ] = React.useState(initialState)

    return [
        formValues,
        (e) => {
            setFormValues( {
                ...formValues,
                [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value //use switch for other cases
            })
        }
    ]
}