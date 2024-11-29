"use client"

import ButtonGroup from "./components/ButtonGroup/ButtonGroup"
import Button from "./components/Button/Button"

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <ButtonGroup>
        <Button variant="outlined">Option 1</Button>
        <Button variant="outlined">Option 2</Button>
        <Button variant="outlined">Option 3</Button>
        <Button variant="outlined">Option 4</Button>
        <Button variant="outlined">Option 5</Button>
      </ButtonGroup>
    </div>
  )
}
