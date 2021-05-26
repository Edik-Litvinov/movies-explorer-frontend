function styleForInputError(errors, section, inputName) {
  const className=`${section}__form-input ${errors[inputName] && `${section}__form-input_error ${section}__form-input_margin`}`
  return className
}

export default styleForInputError;
