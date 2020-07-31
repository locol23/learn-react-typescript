import React, { useState, useCallback } from 'react'

type FooProps = {
  str: string
}

const Foo = React.memo(({ str }: FooProps) => {
  console.log('render Foo')
  return <div>{str}</div>
})

type BarProps = {
  str: string
}

const Bar = React.memo(({ str }: BarProps) => {
  console.log('render Bar')
  return <div>{str}</div>
})

const Button = React.memo(({ handler }: { handler: () => void }) => {
  console.log('render Button')
  return <button onClick={handler}>click</button>
})

export const App = () => {
  const [strFoo, setFooStr] = useState('Init')
  const [strBar, setBarStr] = useState('Init')

  const handler = useCallback(() => {
    setFooStr('Init')
    setBarStr('Str')
  }, [])

  // const memoHandler = useMemo(() => handler, [])
  // const memoCallbackHandler = useCallback(handler, [])

  return (
    <>
      <Foo str={strFoo} />
      <Bar str={strBar} />
      <Button handler={handler} />
    </>
  )
}
