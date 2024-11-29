import React from "react"
import { ContainerInterface } from "./Container.types"

const Container = (props: ContainerInterface) => {
  const { children } = props
  return <div className="container mx-auto px-5">{children}</div>
}

export default Container
