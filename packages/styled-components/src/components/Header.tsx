import React from 'react'
import styled from 'styled-components'

export const Header: React.FC = () => (
  <Container>
    <h1>Styled Components</h1>
  </Container>
)

const Container = styled.div`
  display: flex;
  justify-content: center;
`

// Style Objects
const StyleObjectsContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
})

