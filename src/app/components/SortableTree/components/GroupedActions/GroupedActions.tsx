import Button from "@/app/components/Button/Button"
import ButtonGroup from "@/app/components/ButtonGroup/ButtonGroup"
import React from "react"
import { GroupedActionsInterface } from "./GroupedActions.types"

const GroupedActions = (props: GroupedActionsInterface) => {
  const { onRemove = () => {}, onEdit = () => {}, onAdd = () => {} } = props
  return (
    <ButtonGroup>
      <Button onClick={onRemove} variant="outlined" color="darkGray">
        Usuń
      </Button>
      <Button onClick={onEdit} variant="outlined" color="darkGray">
        Edytuj
      </Button>
      <Button onClick={onAdd} variant="outlined" color="darkGray">
        Dodaj pozycję menu
      </Button>
    </ButtonGroup>
  )
}

export default GroupedActions
