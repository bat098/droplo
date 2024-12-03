"use client"
import Container from "@/app/components/Container/Container"

import { useState } from "react"

import { v4 as uuidv4 } from "uuid"
import { TreeItem } from "../SortableTree/types"
import { FormValuesInterface } from "../Form/Form.types"
import { useItems } from "@/app/hooks"
import EmptyMenu from "../EmptyMenu/EmptyMenu"
import Form from "../Form/Form"
import { SortableTree } from "../SortableTree/SortableTree"
import Button from "../Button/Button"

export default function PageContent() {
  const { items, setItems } = useItems()

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
    <Container>
      {/* <Form /> */}
      {items.length === 0 ? (
        <div className="flex flex-col gap-y-8">
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
          <SortableTree indicator removable items={items} setItems={setItems} />

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
  )
}
