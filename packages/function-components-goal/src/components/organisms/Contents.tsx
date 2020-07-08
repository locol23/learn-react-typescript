import React from 'react'
import { Button, ButtonProps } from '../atoms/Button'
import { Header, HeaderProps } from '../molcules/Header'
import { Footer, FooterProps } from '../molcules/Footer'

type ContentsProps = ButtonProps & HeaderProps & FooterProps

export const Contents = (props: ContentsProps) => (
  <div>
    <Header title={props.title} />
    <Button handler={props.handler} value={props.value} />
    <Footer text={props.text} />
  </div>
)
