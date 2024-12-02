"use client"
import Container from "@/app/components/Container/Container"
import { SortableTree } from "./components/SortableTree/SortableTree"
import { createContext, Dispatch, SetStateAction, useState } from "react"
import { TreeItem, TreeItems } from "./components/SortableTree/types"
import EmptyMenu from "./components/EmptyMenu/EmptyMenu"
import Form from "./components/Form/Form"
import { FormValuesInterface } from "./components/Form/Form.types"
import { v4 as uuidv4 } from "uuid"
import Button from "./components/Button/Button"

// import Form from "./components/Form/Form"

export const ItemsContex = createContext<{
  items: TreeItems
  setItems: Dispatch<SetStateAction<TreeItems>>
}>({ items: [], setItems: () => {} })

export default function Home() {
  const initialItems: TreeItems = [
    {
      id: "1",
      name: "Home",
      link: "Home link",
      children: [],
    },
    {
      id: "2",
      name: "Collections",
      link: "Collections link",
      children: [
        { id: "2.1", name: "Spring", link: "Spring link", children: [] },
        { id: "2.2", name: "Summer", link: "Summer link", children: [] },
      ],
    },
    {
      id: "3",
      name: "About Us",
      link: "About Us link",
      children: [],
    },
  ]

  // const initialItems2: TreeItems = []

  const [items, setItems] = useState(initialItems)

  const [isForm, setIsForm] = useState(false)

  const handleCreateNode = (values: FormValuesInterface) => {
    const newNode: TreeItem = {
      id: uuidv4(),
      children: [],
      link: values.link,
      name: values.name,
    }
    setItems((prev) => [...prev, newNode])
    setIsForm(false)
  }

  return (
    <div>
      <ItemsContex.Provider value={{ items: items, setItems: setItems }}>
        <Container>
          {/* <Form /> */}
          {items.length === 0 ? (
            <div className="flex flex-col gap-y-8 border  ">
              <EmptyMenu onClick={() => setIsForm(true)} />
              {isForm && (
                <Form
                  handleCancel={() => setIsForm(false)}
                  handleValues={handleCreateNode}
                  defaultData={{ link: "", name: "" }}
                  isEditabled={false}
                />
              )}
            </div>
          ) : (
            <div className="border border-lightGray bg-defaultGrey rounded">
              <SortableTree
                indicator
                removable
                editable
                items={items}
                setItems={setItems}
              />

              {isForm && (
                <div className="py-5 px-6 bg-lightestGray border-b border-lightBlueGray">
                  <Form
                    handleCancel={() => setIsForm(false)}
                    handleValues={handleCreateNode}
                    defaultData={{ link: "", name: "" }}
                    isEditabled={false}
                  />
                </div>
              )}
              <div className="py-4 px-6">
                <Button
                  variant="outlined"
                  color="darkGray"
                  onClick={() => setIsForm(true)}
                >
                  Dodaj pozycję menu
                </Button>
              </div>
            </div>
          )}
        </Container>
      </ItemsContex.Provider>
    </div>
  )
}
