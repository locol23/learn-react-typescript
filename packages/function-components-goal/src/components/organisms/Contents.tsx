import React from 'react'
import { ContentsProps } from '../../types'
import { Button } from '../atoms/Button'
import { Footer } from '../molcules/Footer'
import { Header } from '../molcules/Header'

export const Contents = (props: ContentsProps) => (
  <div>
    <Header title={props.title} />
    <Button handler={props.handler} value={props.value} />
    <Footer text={props.text} />
  </div>
)
