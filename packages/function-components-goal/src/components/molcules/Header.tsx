import React from 'react'

export type HeaderProps = {
  title: string
}

export const Header: React.FC<HeaderProps> = (props) => <h1>{props.title}</h1>
