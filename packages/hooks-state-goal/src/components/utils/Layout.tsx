import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`

export const Layout = (props: Props) => <Container>{props.children}</Container>
