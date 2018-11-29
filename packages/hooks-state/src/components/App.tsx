import React, { useState } from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

const Layout = (props: Props) => <Container>{props.children}</Container>

export const App = () => {
  const [text, setText] = useState('Function Components')
  const handler = () => setText('Change Text!!')
  return (
    <React.Fragment>
      <Layout>
      <div>{text}</div>
      </Layout>
      <Layout>
      <button onClick={handler}>change</button>
      </Layout>
    </React.Fragment>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`
