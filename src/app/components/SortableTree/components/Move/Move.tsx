import React from "react"
import { MoveInterface } from "./Move.types"
import Image from "next/image"

const Move = (props: MoveInterface) => {
  const { attributes, listeners } = props

  const buttonStyles = "w-10 h-10 flex items-center justify-center"
  return (
    <button className={buttonStyles} {...attributes} {...listeners}>
      <Image src={`/icons/move.svg`} width={20} height={20} alt="moveIcon" />
    </button>
  )
}

export default Move
