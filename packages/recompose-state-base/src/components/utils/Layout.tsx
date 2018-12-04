import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = (props: LayoutProps) => (
  <Container>{props.children}</Container>
)
