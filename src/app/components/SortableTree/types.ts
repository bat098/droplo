import type { Dispatch, MutableRefObject, SetStateAction } from "react"
import type { UniqueIdentifier } from "@dnd-kit/core"

export interface TreeItem {
  id: UniqueIdentifier
  name: string
  link: string
  children: TreeItem[]
  collapsed?: boolean
}

export type TreeItems = TreeItem[]

export interface FlattenedItem extends TreeItem {
  parentId: UniqueIdentifier | null
  depth: number
  index: number
}

export type SensorContext = MutableRefObject<{
  items: FlattenedItem[]
  offset: number
}>

export interface SortableTreeInterface {
  collapsible?: boolean
  items: TreeItems
  indentationWidth?: number
  indicator?: boolean
  removable?: boolean
  setItems: Dispatch<SetStateAction<TreeItems>>
}
