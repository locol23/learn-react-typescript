import React from 'react'
import { Button, ButtonProps } from '../atoms/Button'
import { Header, HeaderProps } from '../molcules/Header'
import { Footer, FooterProps } from '../molcules/Footer'

type ContentsProps = ButtonProps & HeaderProps & FooterProps

export const Contents: React.FC<ContentsProps> = ({ title, handler, value, text }) => (
  <div>
    <Header title={title} />
    <Button handler={handler} value={value} />
    <Footer text={text} />
  </div>
)
