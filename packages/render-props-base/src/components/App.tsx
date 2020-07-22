import React from 'react'

type Props = {
  render?: () => React.ReactNode
}

const Child: React.FC<Props> = ({ render }) => <>{render ? render() : <p>render is nothing</p>}</>

export const App: React.FC = () => (
  <>
    <Child render={() => <div>render props</div>} />
    <Child />
  </>
)

