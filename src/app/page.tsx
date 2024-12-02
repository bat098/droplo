"use client"
import Container from "@/app/components/Container/Container"
import { SortableTree } from "./components/SortableTree/SortableTree"
import { useState } from "react"
import { TreeItems } from "./components/SortableTree/types"
import EmptyMenu from "./components/EmptyMenu/EmptyMenu"
// import Form from "./components/Form/Form"

export default function Home() {
  // const initialItems: TreeItems = [
  //   {
  //     id: "1",
  //     name: "Home",
  //     link: "Home link",
  //     children: [],
  //   },
  //   {
  //     id: "2",
  //     name: "Collections",
  //     link: "Collections link",
  //     children: [
  //       { id: "2.1", name: "Spring", link: "Spring link", children: [] },
  //       { id: "2.2", name: "Summer", link: "Summer link", children: [] },
  //     ],
  //   },
  //   {
  //     id: "3",
  //     name: "About Us",
  //     link: "About Us link",
  //     children: [],
  //   },
  // ]

  const initialItems2: TreeItems = []

  const [items, setItems] = useState(initialItems2)

  const handleAddFirstTask = () => {
    console.log("handleAddFirstTask")
  }

  return (
    <div>
      <Container>
        {/* <Form /> */}
        {items.length === 0 ? (
          <EmptyMenu onClick={handleAddFirstTask} />
        ) : (
          <SortableTree
            indicator
            removable
            editable
            items={items}
            setItems={setItems}
          />
        )}
      </Container>
    </div>
  )
}
