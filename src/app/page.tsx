"use client"
import { ItemsProvider } from "./hooks"
import PageContent from "./components/PageContent/PageContent"
import { useEffect, useState } from "react"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Prevent the component from rendering on the server
    return null
  }
  return (
    <ItemsProvider>
      <PageContent />
    </ItemsProvider>
  )
}
