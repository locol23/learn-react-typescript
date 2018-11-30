import React from 'react'
import { ButtonProps } from '../../types'

export const Button = (props: ButtonProps) => (
  <button onClick={() => props.handler(props.value)}>alert</button>
)
