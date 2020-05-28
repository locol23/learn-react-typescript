# hooks-use-state-base

[Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)

## useEffect

```tsx
const App = () => {
  const [title, setTitle] = useState<string>('Initial Title')
  const handler = () => setTitle('Change Title')

  return (
    <>
      <h1>{title}</h1>
      <button onClick={handler}>click</button>
    </>
  )
}
```

