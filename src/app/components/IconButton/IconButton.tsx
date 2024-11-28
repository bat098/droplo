import React from "react"
import { IconButtonInterface } from "./IconButton.types"
import clsx from "clsx"

const IconButton = (props: IconButtonInterface) => {
  const { children, disabled, onClick, innerRef, className } = props
  return (
    <button
      ref={innerRef}
      onClick={onClick}
      disabled={disabled}
      className={clsx("w-10 h-10 flex justify-center items-center", className)}
    >
      <div className="w-[20px]">{children}</div>
    </button>
  )
}

export default IconButton
