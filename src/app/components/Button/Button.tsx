import React from "react"
import {
  ButtonInterface,
  CommonClassesType,
  VaraintsClassesType,
} from "./Button.types"

const Button = (props: ButtonInterface) => {
  const { children, variant = "contained", color = "deepPurple" } = props

  const commonClasses: CommonClassesType = {
    contained: "text-white",
    outlined: "bg-white",
  }

  const variantsClasses: VaraintsClassesType = {
    contained: {
      deepPurple: `bg-deepPurple border-deepPurple `,
      lightPurple: ` bg-lightPurple border-lightPurple `,
      purple: `bg-purple border-purple`,
      darkGray: `bg-darkGray border-darkGray`,
    },
    outlined: {
      deepPurple: `text-deepPurple border-purple`,
      lightPurple: `text-lightPurple border-lightPurple`,
      purple: `text-purple border-lightPurple`,
      darkGray: `text-darkGray border-lightGray`,
    },
  }

  const baseStyles =
    "h-10 px-3.5 rounded-md border font-semibold text-sm shadow-primaryShadow"
  const commonStyles = commonClasses[variant]
  const variantColorStyles = variantsClasses[variant][color]

  const styles = `${baseStyles} ${commonStyles} ${variantColorStyles}`

  return <button className={styles}>{children}</button>
}

export default Button
