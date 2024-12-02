"use client"
import Container from "@/app/components/Container/Container"
// import { SortableTree } from "./components/SortableTree/SortableTree"
import Form from "./components/Form/Form"

export default function Home() {
  return (
    <div>
      <Container>
        <Form />
        {/* <SortableTree indicator removable editable /> */}
      </Container>
    </div>
  )
}
