export interface TextFieldBaseInterface {
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  innerRef?: React.RefObject<HTMLInputElement>
  disabled?: boolean
  placeholder?: string
  className?: string
  name: string
}
