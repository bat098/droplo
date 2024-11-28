import React from "react"
import { InputGroupInterface } from "./InputGroup.types"

const InputGroup = (props: InputGroupInterface) => {
  const { startElement, children } = props
  return (
    <div className="relative">
      <div className="absolute w-[42px] h-full flex justify-center items-center">
        <div className="w-[14px]">{startElement}</div>
      </div>
      {children}
    </div>
  )
}

export default InputGroup
