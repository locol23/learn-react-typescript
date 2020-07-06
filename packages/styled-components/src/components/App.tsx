import React from 'react'
import styled from 'styled-components'
import { Color } from '../const'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = (props: LayoutProps) => <Container>{props.children}</Container>

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const Header = () => (
  <Layout>
    <h1>Styled Components</h1>
  </Layout>
)

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
      <StyledButton onClick={() => alert('Styled Button')}>Styled Button</StyledButton>
      <StyledButton styleType={'long'} as={CustomButton}>
        Custome Button
      </StyledButton>
    </Layout>
  </React.Fragment>
)

const Button = styled.button`
  border: solid 1px ${Color.PRIMARY};
  width: 100px;
  height: 30px;
  margin: 0 20px;
`

type StyleMap = {
  [key: string]: () => string
}

const styleMap: StyleMap = {
  default: () => `width: 200px;`,
  long: () => `width: 300px;`,
}

type StyleButtonProps = {
  styleType?: string
}

const StyledButton = styled(Button)`
  color: ${Color.SECONDARY};
  border: solid 1px ${Color.SECONDARY};
  border-radius: 5px;
  ${(props: StyleButtonProps) => (props.styleType ? styleMap[props.styleType]() : styleMap.default())}
`
