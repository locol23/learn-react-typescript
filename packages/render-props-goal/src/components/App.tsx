import React, { ReactNode } from 'react'
import { Child } from './Child'

const NLink: React.FC = ({ children }) => <div>{children}</div>

export const App: React.FC = () => {
  const render = (component: ReactNode) => <NLink>{component}</NLink>

  return (
    <>
      <Child render={render} linkUrl="https://google.com" />
    </>
  )
}
