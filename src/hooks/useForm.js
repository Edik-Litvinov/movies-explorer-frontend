import React, { useCallback } from 'react';

export function useForm() {
  const [ values, setValues ] = React.useState({});

  const handleChange = (evt) => {
    const input = evt.target;
    const name = input.name;
    const value = input.value;

    setValues({ ...values, [name]: value })
  }
  return { values, handleChange, setValues }
}

export function useFormValidation() {
  const [ values, setValues ] = React.useState({});
  const [ errors, setErrors ] = React.useState({});
  const [ isValid, setIsValid ] = React.useState(false);

  const handleChange = (evt) => {
    const input = evt.target;
    const name = input.name;
    const value = input.value;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
    setIsValid(input.closest('form').checkValidity());
  }
  const resetForm = useCallback((newValues = {}, newIsValid = false, newErrors = {}) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [ setValues, setErrors, setIsValid ]);

  return { values, errors, isValid, handleChange, setValues, resetForm }
}
