import React from "react"
import { ContainerInterface } from "./Container.types"
import clsx from "clsx"

const Container = (props: ContainerInterface) => {
  const { children, className } = props
  return (
    <div className={clsx("container mx-auto px-5", className)}>{children}</div>
  )
}

export default Container
