import { createContext } from 'react'

type ContextValue = {
  text: string
}

export const Context = createContext<ContextValue>({ text: '' })

