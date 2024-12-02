import { UniqueIdentifier } from "@dnd-kit/core"
import { TreeItem, TreeItems } from "../../types"
import { FormValuesInterface } from "@/app/components/Form/Form.types"

/**
 * Adds a new child to the parent node with the specified ID in a tree structure.
 * This function returns a new tree structure without mutating the original array.
 *
 * @param array - The array of tree items (TreeItems).
 * @param parentId - The unique identifier of the parent node.
 * @param newChild - The new child node to add.
 * @returns A new tree structure with the added child.
 */
export const addChildToParentById = (
  array: TreeItems, // The tree structure represented as an array of TreeItems.
  parentId: UniqueIdentifier, // The unique identifier of the parent node.
  newChild: TreeItem // The child node to add to the parent.
): TreeItems => {
  /**
   * Recursively traverses the tree and adds the new child to the parent node.
   *
   * @param nodes - The current array of tree nodes being processed.
   * @returns A new array of tree nodes with the child added.
   */
  const findAndAddChild = (nodes: TreeItems): TreeItems => {
    return nodes.map((node) => {
      if (node.id === parentId) {
        // If the current node matches the parentId, return a new node with the updated children.
        return {
          ...node,
          children: [...(node.children || []), newChild], // Ensure children array exists and add the new child.
        }
      }

      // If the node has children, recursively process them.
      return {
        ...node, // Preserve the current node's properties.
        children: node.children ? findAndAddChild(node.children) : [], // Recurse into children if they exist.
      }
    })
  }

  // Start the recursive process and return the updated tree.
  return findAndAddChild(array)
}

// #########################################################################################################################
// #########################################################################################################################
// #########################################################################################################################
// #########################################################################################################################
// #########################################################################################################################

/**
 * Updates the `name` and `link` properties of a tree item identified by `id`.
 * This function returns a new tree structure without mutating the original array.
 *
 * @param array - The array of tree items (TreeItems).
 * @param id - The unique identifier of the tree item to update.
 * @param formValues - An object containing the new `name` and `link` values.
 * @returns A new tree structure with the updated item.
 */
export const updateTreeItemById = (
  array: TreeItems, // The tree structure represented as an array of TreeItems.
  id: UniqueIdentifier, // The unique identifier of the item to update.
  formValues: FormValuesInterface // An object containing the new `name` and `link`.
): TreeItems => {
  /**
   * Recursively traverses the tree and updates the matching item.
   *
   * @param nodes - The current array of tree nodes being processed.
   * @returns A new array of tree nodes with the updated item.
   */
  const updateItem = (nodes: TreeItems): TreeItems => {
    return nodes.map((node) => {
      if (node.id === id) {
        // If the current node matches the id, return a new node with updated properties.
        return {
          ...node,
          ...formValues, // Spread the form values to update `name` and `link`.
        }
      }

      // If the node has children, recursively process them.
      return {
        ...node, // Preserve the current node's properties.
        children: updateItem(node.children), // Recurse into children if they exist.
      }
    })
  }

  // Start the recursive process and return the updated tree.
  return updateItem(array)
}
