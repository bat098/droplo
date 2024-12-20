import { MyColors } from "@/tailwind.types"

export type ButtonVariant = "contained" | "outlined"
export type ButtonColors = keyof Pick<
  MyColors,
  "deepPurple" | "lightPurple" | "purple" | "darkGray"
>

export type ButtonType = "button" | "submit"

export interface ButtonInterface {
  children: React.ReactNode
  variant?: ButtonVariant
  color?: ButtonColors
  icon?: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  className?: string
  type?: ButtonType
}

export type VaraintsClassesType = {
  [key in ButtonVariant]: {
    [key in ButtonColors]: string
  }
}

export type CommonClassesType = Record<ButtonVariant, string>
