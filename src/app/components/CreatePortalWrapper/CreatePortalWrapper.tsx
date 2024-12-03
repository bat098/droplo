"use client"
import { useEffect, useState } from "react"
import { CreatePortalWrapperInterface } from "./CreatePortalWrapperTypes"
import { createPortal } from "react-dom"

const CreatePortalWrapper = (props: CreatePortalWrapperInterface) => {
  const { children } = props
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (typeof document !== "undefined") {
      setIsVisible(true)
    }
  }, [])
  return isVisible ? createPortal(children, document.body) : null
}

export default CreatePortalWrapper
