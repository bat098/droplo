import { ButtonType } from "../Button/Button.types"

export interface IconButtonInterface {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  children?: React.ReactNode
  className?: string
  innerRef?: React.RefObject<HTMLButtonElement>
  type?: ButtonType
}
