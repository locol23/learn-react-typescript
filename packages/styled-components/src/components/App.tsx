import React, { Children } from 'react'
import styled from 'styled-components'
import { Color, Size } from '../const'

interface LayoutProps {
  children: React.ReactNode
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const Layout = (props: LayoutProps) => <Container>{props.children}</Container>

const Header = () => (
  <Layout>
    <h1>Function Components</h1>
  </Layout>
)

const Button = styled.button`
  border: solid 1px ${Color.PRIMARY};
  width: 100px;
  height: 30px;
  margin: 0 20px;
`

const StyledButton = styled(Button)`
  color: ${Color.SECONDARY};
  border: solid 1px ${Color.SECONDARY};
  border-radius: 5px;
`

interface CustomButtonProps {
  children: React.ReactNode
}

const CustomButton = (props: CustomButtonProps) => (
  <button onClick={() => alert('CustomButton')} {...props}>
    {props.children}
  </button>
)

export const App = () => (
  <React.Fragment>
    <Header />
    <Layout>
      <Button onClick={() => alert('Button')}>Nomal Button</Button>
      <StyledButton onClick={() => alert('Styled Button')}>
        Styled Button
      </StyledButton>
      <StyledButton as={CustomButton}>Custome Button</StyledButton>
    </Layout>
  </React.Fragment>
)
