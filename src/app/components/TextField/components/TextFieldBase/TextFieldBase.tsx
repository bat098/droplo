import React from "react"
import { TextFieldBaseInterface } from "./TextFieldBase.types"
import clsx from "clsx"

const TextFieldBase = (props: TextFieldBaseInterface) => {
  const {
    value,
    onChange,
    innerRef,
    disabled,
    placeholder,
    className,
    ...rest
  } = props

  return (
    <input
      value={value}
      onChange={onChange}
      ref={innerRef}
      disabled={disabled}
      placeholder={placeholder}
      className={clsx(
        className,
        "text-base border border-lightGray rounded-lg py-2 px-3 outline-none placeholder-grayishPurple w-full shadow-primaryShadow"
      )}
      {...rest}
    />
  )
}

export default TextFieldBase
