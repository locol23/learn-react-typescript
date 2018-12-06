# hooks-state-base

[Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)

## useState

```tsx
const App = () => {
  const [text, setText] = useState('init')

  return <div>{text}</div> // text = 'init'
}
```

```tsx
const App = (props: AppProps) => {
  const [text, setText] = useState(() => `Hello ${props.text}`) // props.text = 'World'

  return <div>{text}</div> // text = 'Hello World'
}
```

## useEffect

```tsx
const App = () => {
  const [text, setText] = useState('init')
  useEffect(() => setText('update'), []) // like componentDidMount

  return <div>{text}</div> // text = 'update'
}
```

# useCallback

Returns a memoized callback.

```tsx
const App = () => {
  const [text, setText] = useState('init')
  const handler = useCallback(() => setText(text), [text])

  return (
    <div>{text}</div> // text = 'init'
    <button onClick={handler}>button</button>
  )
}
```

# useMemo

Returns a memoized value.
useMemo is like memoize of [reselect](https://github.com/reduxjs/reselect)

```tsx
const App = () => {
  const [text, setText] = useState('init')
  useMemo(() => text, [text])

  return <div>{text}</div> // text = 'init'
}
```
