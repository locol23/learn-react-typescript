import React, { useState, useCallback } from 'react'

type FooProps = {
  str: string
}
const Foo = React.memo(({ str }: FooProps) => {
  console.log('render hoge')
  return <div>{str}</div>
})

type BaaProps = {
  str: string
}
const Baa = React.memo(({ str }: BaaProps) => {
  console.log('render fuga')
  return <div>{str}</div>
})

const Button = React.memo(({ handler }: { handler: () => void }) => {
  console.log('render Button')
  return <button onClick={handler}>click</button>
})

export const App = () => {
  const [strFoo, setFooStr] = useState('Init')
  const [strBaa, setBaaStr] = useState('Init')

  const handler = useCallback(() => {
    setFooStr('Init')
    setBaaStr('Str')
  }, [])

  return (
    <>
      <Foo str={strFoo} />
      <Baa str={strBaa} />
      <Button handler={handler} />
    </>
  )
}
