import React from 'react'

type HeaderProps = {
  title: string
}

export const Header = (props: HeaderProps) => <h1>{props.title}</h1>
