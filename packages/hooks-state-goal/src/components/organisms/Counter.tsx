import React, { useCallback, useMemo, useState } from 'react'
import { Button } from '../atoms/Button'
import { Text } from '../atoms/Text'
import { Layout } from '../utils/Layout'

export const Counter = () => {
  const [count, setCount] = useState(0)
  const num = useMemo(() => count, [count])

  const incrementProps = {
    name: 'increment',
    handler: useCallback(() => setCount(num + 1), [num]),
  }
  const decrementProps = {
    name: 'decrement',
    handler: useCallback(() => setCount(num - 1), [num]),
  }
  const resetProps = {
    name: 'reset',
    handler: useCallback(() => setCount(0), []),
  }

  return (
    <React.Fragment>
      <Layout>
        <Text text={num} />
      </Layout>
      <Layout>
        <Button {...incrementProps} />
        <Button {...decrementProps} />
        <Button {...resetProps} />
      </Layout>
    </React.Fragment>
  )
}
