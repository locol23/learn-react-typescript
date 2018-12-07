import * as React from 'react'
import styled from 'styled-components'

interface LayoutProps {
  children: React.ReactNode
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`

export const Layout = (props: LayoutProps) => (
  <Container>{props.children}</Container>
)
