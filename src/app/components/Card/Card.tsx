import React from "react"
import { Cardinterface } from "./Card.types"

const Card = (props: Cardinterface) => {
  const { children } = props
  return (
    <div className="bg-white border border-lightGray rounded-lg py-5 px-6 ">
      {children}
    </div>
  )
}

export default Card
