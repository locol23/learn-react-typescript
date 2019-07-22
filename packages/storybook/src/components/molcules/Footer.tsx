import React from 'react'

type FooterProps = {
  text: string
}

export const Footer = (props: FooterProps) => <footer>{props.text}</footer>
