import React from "react"
import { LabelInterface } from "./Tabel.types"

const Label = (props: LabelInterface) => {
  const { children, htmlFor, ...rest } = props
  return (
    <label
      htmlFor={htmlFor}
      className="text-darkGray text-sm font-medium"
      {...rest}
    >
      {children}
    </label>
  )
}

export default Label
