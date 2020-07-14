import React from 'react'
import styled from 'styled-components'
import { color } from '../styles'
import { Header } from './Header'

const CustomButton: React.FC = ({ children }) => <button onClick={() => alert('CustomButton')}>{children}</button>

export const App: React.FC = () => (
  <>
    <Header />
    <Container>
      <Button onClick={() => alert('Button')}>Nomal Button</Button>
      <StyledButton onClick={() => alert('Styled Button')}>Styled Button</StyledButton>
      <StyledButton styleType={'long'} as={CustomButton}>
        Custome Button
      </StyledButton>
    </Container>
  </>
)

// Style Objects
const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',
})

const Button = styled.button`
  border: solid 1px ${color.primary};
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
  color: ${color.secondary};
  border: solid 1px ${color.secondary};
  border-radius: 5px;
  ${(props: StyleButtonProps) => (props.styleType ? styleMap[props.styleType]() : styleMap.default())}
`

// Style Objects
const StyleObjectsStyledButton = styled(Button)<StyleButtonProps>(
  {
    color: color.secondary,
    border: `solid 1px ${color.secondary}`,
    borderRadius: 5,
  },
  (props) => (props.styleType ? styleMap[props.styleType]() : styleMap.default())
)

