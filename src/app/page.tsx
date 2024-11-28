"use client"

import ButtonGroup from "./components/ButtonGroup/ButtonGroup"
import Button from "./components/Button/Button"

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <ButtonGroup>
        <Button>Option 1</Button>
        <Button>Option 2</Button>
        <Button>Option 3</Button>
        <Button>Option 4</Button>
        <Button>Option 5</Button>
      </ButtonGroup>
    </div>
  )
}
