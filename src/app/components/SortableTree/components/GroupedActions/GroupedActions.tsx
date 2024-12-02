import Button from "@/app/components/Button/Button"
import ButtonGroup from "@/app/components/ButtonGroup/ButtonGroup"
import React from "react"

const GroupedActions = ({ onRemove, onEdit, onAdd }) => {
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
