import { MyColors } from "@/tailwind.types"

export type ButtonVariant = "contained" | "outlined"
export type ButtonColors = keyof Pick<
  MyColors,
  "deepPurple" | "lightPurple" | "purple" | "darkGray"
>

export interface ButtonInterface {
  children: React.ReactNode
  variant?: ButtonVariant
  color?: ButtonColors
}

export type VaraintsClassesType = {
  [key in ButtonVariant]: {
    [key in ButtonColors]: string
  }
}

export type CommonClassesType = Record<ButtonVariant, string>
