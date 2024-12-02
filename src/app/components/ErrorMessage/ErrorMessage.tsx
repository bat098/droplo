import React from "react"
import { ErrorMessageInterface } from "./ErrorMessage.types"

const ErrorMessage = (props: ErrorMessageInterface) => {
  const { children } = props
  return <div className="ms-4 text-sm text-danger">{children}</div>
}

export default ErrorMessage
