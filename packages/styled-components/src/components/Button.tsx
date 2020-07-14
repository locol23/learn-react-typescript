import styled from 'styled-components'
import { color } from '../styles'

export const Button = styled.button`
  border: solid 1px ${color.primary};
  width: 100px;
  height: 30px;
  margin: 0 20px;
`

// Style Objects
const StyleObjectsButton = styled.button({
  border: `solid 1px ${color.primary}`,
  width: 100,
  height: 30,
  margin: '0 20px',
})

