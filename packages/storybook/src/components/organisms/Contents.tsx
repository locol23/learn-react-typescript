import React from 'react'
import { Button } from '../atoms/Button'
import { PrimaryButton } from '../atoms/PrimaryButton'
import { Footer } from '../molcules/Footer'
import { Header } from '../molcules/Header'
import { SecondaryButton } from '../atoms/SecondaryButton'
import styled from 'styled-components'

type ContentsProps = {
  title: string
  text: string
  handler: () => void
}

export const Contents = (props: ContentsProps) => (
  <>
    <Header title={props.title} />
    <ButtonWrapper>
      <Button onClick={props.handler}>Button</Button>
    </ButtonWrapper>
    <ButtonWrapper>
      <PrimaryButton onClick={props.handler}>Primary Button</PrimaryButton>
    </ButtonWrapper>
    <ButtonWrapper>
      <SecondaryButton onClick={props.handler}>Secondary Button</SecondaryButton>
    </ButtonWrapper>
    <Footer text={props.text} />
  </>
)

const ButtonWrapper = styled.div({
  width: '300px',
  margin: '10px 0',
})
