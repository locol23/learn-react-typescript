import React from 'react'
import { Child } from './Child'

export const App: React.FC = () => {
  const render = () => <div>render props</div>

  return (
    <>
      <Child render={render} />
      <Child />
    </>
  )
}
