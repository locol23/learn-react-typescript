import * as React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

const Layout = (props: Props) => <Container>{props.children}</Container>

export const App = () => (
  <Layout>
    <div>Function Components</div>
  </Layout>
)

const Container = styled.div`
  display: flex;
  justify-content: center;
`
