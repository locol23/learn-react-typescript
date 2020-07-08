import React from 'react'

export type ButtonProps = {
  handler: (str: string) => void
  value: string
}

export const Button: React.FC<ButtonProps> = (props) => (
  <button onClick={() => props.handler(props.value)}>alert</button>
)

