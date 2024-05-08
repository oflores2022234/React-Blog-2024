/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export const Input = ({
    field,
    label,
    value,
    onChangeHandler,
    type,
    showErrorMessage,
    validationMessage,
    onBlurHandler,
    textarea,
}) => {
    const handleValueChange = (event) => {
        onChangeHandler(event.target.value, field)
    }

    const handleInputBlur = (event) => {
        onBlurHandler(event.target.value, field)
    }


  return (
    <>
        <div className="">

        </div>
    </>
  )
}

