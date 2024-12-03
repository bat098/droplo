import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react"
import { TreeItems } from "./components/SortableTree/types"

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

const initialItems: TreeItems = []

export interface ItemsInterface {
  items: TreeItems
  setItems: Dispatch<SetStateAction<TreeItems>>
}

export const ItemsContex = createContext<ItemsInterface | undefined>(undefined)

export interface ItemsProviderInterface {
  children: React.ReactNode
}

export const ItemsProvider = (props: ItemsProviderInterface) => {
  const { children } = props
  const [items, setItems] = useState<TreeItems>(initialItems)

  return (
    <ItemsContex.Provider value={{ items, setItems }}>
      {children}
    </ItemsContex.Provider>
  )
}

export const useItems = () => {
  const itemsContext = useContext(ItemsContex)

  if (!itemsContext) {
    throw new Error("useItems hook must be used in ItemsProvider")
  }
  return itemsContext
}
