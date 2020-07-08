import React from 'react'

export type FooterProps = {
  text: string
}

export const Footer: React.FC<FooterProps> = (props) => <footer>{props.text}</footer>
