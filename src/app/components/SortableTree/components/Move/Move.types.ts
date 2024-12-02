import { DraggableAttributes } from "@dnd-kit/core"
import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities"

export interface MoveInterface {
  attributes: DraggableAttributes
  listeners: SyntheticListenerMap | undefined
}
