import React from "react"
import { ButtonGroupInterface } from "./Button.types"

const ButtonGroup = ({ children }: ButtonGroupInterface) => {
  const childrenWithClass = React.Children.map(children, (child, index) => {
    let classname = ""

    switch (index) {
      case 0:
        classname = "rounded-l-lg rounded-r-none border-r-0"
        break
      case children.length - 1:
        classname = "rounded-r-lg rounded-l-none"
        break
      default:
        classname = "rounded-none border-r-0"
        break
    }

    return React.cloneElement(child, {
      className: `${classname} ${child.props.className || ""}`,
    })
  })

  return <div>{childrenWithClass}</div>
}

export default ButtonGroup
