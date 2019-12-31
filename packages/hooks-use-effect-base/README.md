# hooks-use-effect-base

[Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)

## useEffect

```tsx
const App = () => {
  const [title, setTitle] = useState('Initial Title')

  useEffect(() => {
    setTitle('Use Effect')
  }, [])

  return <h1>{title}</h1>
}
```

