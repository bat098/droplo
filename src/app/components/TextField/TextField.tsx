import React from "react"
import { TextFieldInterface } from "./TextField.types"
import TextFieldBase from "./components/TextFieldBase/TextFieldBase"
import InputGroup from "./components/InputGroup/InputGroup"
import clsx from "clsx"

const TextField = ({ icon, className, ...rest }: TextFieldInterface) => {
  return icon ? (
    <InputGroup startElement={icon}>
      {<TextFieldBase className={clsx("ps-[42px]", className)} {...rest} />}
    </InputGroup>
  ) : (
    <TextFieldBase className={className} {...rest} />
  )
}

export default TextField
