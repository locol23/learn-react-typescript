import React, { ReactNode } from 'react'

type Props = {
  linkUrl: string
  render?: (component: ReactNode) => ReactNode
}

const Foo = () => <div>foo</div>

export const Child: React.FC<Props> = ({ render, linkUrl }) => {
  return (
    <>
      {render ? (
        render(<Foo />)
      ) : (
        <a href={linkUrl}>
          <Foo />
        </a>
      )}
    </>
  )
}
