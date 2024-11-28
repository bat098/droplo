"use client"

import TextField from "./components/TextField/TextField"
import { useState } from "react"

export default function Home() {
  const [value, setValue] = useState("test")

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <TextField
        value={value}
        onChange={handleOnChange}
        icon={
          <img
            src="/icons/magnifier.svg"
            width={20}
            height={20}
            alt="magnifier icon"
            color="red"
          />
        }
      />
      <TextField value={value} onChange={handleOnChange} placeholder="test" />
    </div>
  )
}
