import React from 'react'
import {
  compose,
  setDisplayName,
  StateHandler,
  StateHandlerMap,
  withStateHandlers,
} from 'recompose'
import { Layout } from '../utils/Layout'

const Component = (props: AppProps) => {
  const handler = () => props.setText('Change Text!!')

  return (
    <React.Fragment>
      <Layout>
        <h1>{props.text}</h1>
      </Layout>
      <Layout>
        <button onClick={handler}>change</button>
      </Layout>
    </React.Fragment>
  )
}

interface AppProps {
  text: string
  setText: (str: string) => StateHandler<AppEnhancerStateProps>
}

interface AppEnhancerStateProps {
  text: string
}

type AppEnhancerStateHandlerProps = {
  setText: (str: string) => StateHandler<AppEnhancerStateProps>
} & StateHandlerMap<AppEnhancerStateProps>

type EnhancedAppProps = AppEnhancerStateProps &
  AppEnhancerStateHandlerProps &
  AppProps

const Enhancer = compose<EnhancedAppProps, AppProps>(
  setDisplayName('App'),
  withStateHandlers<
    AppEnhancerStateProps,
    AppEnhancerStateHandlerProps,
    AppProps
  >(
    {
      text: 'Function Components',
    },
    {
      setText: () => str => ({ text: str }),
    }
  )
)

export const App = Enhancer(Component)
