import React, { ReactNode } from 'react'

type Props = {
  render?: () => ReactNode
}

export const Child: React.FC<Props> = ({ render }) => <>{render ? render() : <p>render is nothing</p>}</>

