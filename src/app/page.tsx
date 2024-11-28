"use client"

import { useState } from "react"
import FoprmGroup from "./components/FormGroup/FoprmGroup"
import Label from "./components/Label/Label"
import TextField from "./components/TextField/TextField"

export default function Home() {
  const [value, setValue] = useState("")
  return (
    <div>
      <FoprmGroup>
        <Label>test</Label>
        <TextField value={value} onChange={(e) => setValue(e.target.value)} />
      </FoprmGroup>
    </div>
  )
}
