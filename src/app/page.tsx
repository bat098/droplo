"use client"
import { ItemsProvider } from "./hooks"
import PageContent from "./components/PageContent/PageContent"

export default function Home() {
  return (
    <ItemsProvider>
      <PageContent />
    </ItemsProvider>
  )
}
