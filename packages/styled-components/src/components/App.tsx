import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

const Layout = (props: Props) => <Container>{props.children}</Container>

export const App = () => (
  <Layout>
    <h1>Function Components</h1>
  </Layout>
)

const Container = styled.div`
  display: flex;
  justify-content: center;
`
