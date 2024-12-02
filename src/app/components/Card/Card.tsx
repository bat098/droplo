import React from "react"
import { Cardinterface } from "./Card.types"
import clsx from "clsx"

const Card = (props: Cardinterface) => {
  const { children, className } = props
  return (
    <div
      className={clsx(
        "bg-white border border-lightGray rounded-lg py-5 px-6 ",
        className
      )}
    >
      {children}
    </div>
  )
}

export default Card
