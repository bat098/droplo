import React, { forwardRef } from "react"

import { Action, ActionProps } from "../Action"
import Image from "next/image"

export const Handle = forwardRef<HTMLButtonElement, ActionProps>(
  (props, ref) => {
    return (
      <Action
        ref={ref}
        cursor="grab"
        data-cypress="draggable-handle"
        {...props}
      >
        <Image src={`/icons/move.svg`} width={20} height={20} alt="moveIcon" />
      </Action>
    )
  }
)

Handle.displayName = "Handle"
