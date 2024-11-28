import React from "react"
import { FormGroupInterface } from "./FormGroup"

const FoprmGroup = (props: FormGroupInterface) => {
  const { children } = props
  return <div className="flex flex-col gap-1.5">{children}</div>
}

export default FoprmGroup
