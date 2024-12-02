"use client"
import Container from "@/app/components/Container/Container"
import { SortableTree } from "./components/SortableTree/SortableTree"

export default function Home() {
  return (
    <div>
      <Container>
        <SortableTree indicator removable editable />
      </Container>
    </div>
  )
}
