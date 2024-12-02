import React from "react"
import Button from "../Button/Button"
import Image from "next/image"

const EmptyMenu = ({ onClick = () => {} }) => {
  return (
    <div className="border border-lightBlueGray rounded p-6 flex flex-col items-center justify-center bg-lightestGray">
      <div className="mb-1 text-base text-darkNavy font-semibold">
        Menu jest puste
      </div>
      <div className="mb-6 text-sm text-mediumGray ">
        W tym menu nie ma jeszcze żadnych linków.
      </div>
      <Button
        onClick={onClick}
        icon={
          <Image
            src={`/icons/add.svg`}
            alt="plus icon"
            width={20}
            height={20}
          />
        }
      >
        Dodaj pozycję menu
      </Button>
    </div>
  )
}

export default EmptyMenu
