import { UniqueIdentifier } from "@dnd-kit/core"
import { TreeItem, TreeItems } from "../../types"

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
