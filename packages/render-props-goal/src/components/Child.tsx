import React, { ReactNode } from 'react'

type Props = {
  linkUrl: string
  render?: (component: ReactNode) => ReactNode
}

const Hoge = () => <div>hoge</div>

export const Child: React.FC<Props> = ({ render, linkUrl }) => {
  return (
    <>
      {render ? (
        render(<Hoge />)
      ) : (
        <a href={linkUrl}>
          <Hoge />
        </a>
      )}
    </>
  )
}
