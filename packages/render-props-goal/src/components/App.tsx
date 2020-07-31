import React, { ReactNode } from 'react'
import { Child } from './Child'

const Link: React.FC = ({ children }) => <a>{children}</a>

export const App: React.FC = () => {
  const render = (component: ReactNode) => <Link>{component}</Link>

  return (
    <>
      <Child render={render} linkUrl="https://google.com" />
    </>
  )
}
