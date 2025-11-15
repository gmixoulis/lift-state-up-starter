# Lifting State Up - Exercises

Practice exercises for learning the "lifting state up" pattern in React.

## What is Lifting State Up?

Lifting state up is a pattern where you move shared state to the closest common ancestor of components that need it. This allows multiple child components to share and synchronize the same data.

### When to Lift State Up

- Two or more sibling components need to share the same data
- Child components need to modify data that affects other components
- You need to keep multiple components synchronized

## Getting Started

### Install Dependencies

```bash
pnpm install
```

### Run the Development Server

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Exercises

Complete the TODOs in each exercise file to practice lifting state up.

### Exercise 1: Shared Counter

**File**: `src/exercises/Exercise1SharedCounter.tsx`

**Goal**: Learn the basics of lifting state up

**Tasks**:
- Create state in the parent component for the counter value
- Pass the counter value down to the display component via props
- Pass handler functions down to the controls component via props
- Wire up the increment, decrement, and reset buttons

**Key Concepts**:
- Parent component holds the state
- Child components receive data via props
- Child components communicate with parent via callback functions

### Exercise 2: Todo List

**File**: `src/exercises/Exercise2TodoList.tsx`

**Goal**: Learn how to lift state when working with arrays

**Tasks**:
- Create state in the parent for the todos array and next ID
- Implement the `handleAddTodo` function
- Implement the `handleDeleteTodo` function
- Pass the correct props to TodoInput and TodoListDisplay
- Complete the TodoListDisplay to render the todos

**Key Concepts**:
- Managing array state in the parent
- Passing both data and event handlers down
- Using array methods (map, filter) without mutating state
- Handling form submissions

### Exercise 3: Temperature Converter

**File**: `src/exercises/Exercise3TemperatureConverter.tsx`

**Goal**: Learn how to keep synchronized inputs with conversion logic

**Tasks**:
- Create state for temperature and scale
- Follow the example pattern for `handleCelsiusChange` to create `handleFahrenheitChange`
- Follow the example pattern for `celsius` to calculate `fahrenheit`
- Pass the correct props to both TemperatureInput components

**Key Concepts**:
- Single source of truth for shared data
- Computed/derived values
- Handling bidirectional data flow
- Converting between different representations of the same data

**Note**: This exercise includes completed examples (conversion functions, one handler, one derived value) to help you understand the pattern. Study the examples, then apply the same pattern to complete the exercise!

## Tips

1. **Start with Exercise 1** - It's the simplest and establishes the core pattern
2. **Read the comments** - They contain helpful hints and guidance
3. **Check the browser console** - TypeScript errors will appear there
4. **Test as you go** - Make small changes and verify they work
5. **Refer to the theory repo** - Check `../live-lifting-state-up` for working examples if you get stuck

## Pattern Summary

The general pattern for lifting state up in React:

```tsx
// Parent Component (holds the state)
function Parent() {
  const [data, setData] = useState(initialValue);

  const handleUpdate = (newValue) => {
    setData(newValue);
  };

  return (
    <>
      <ChildA data={data} />
      <ChildB onUpdate={handleUpdate} />
    </>
  );
}

// Child Component A (displays data)
function ChildA({ data }) {
  return <div>{data}</div>;
}

// Child Component B (modifies data)
function ChildB({ onUpdate }) {
  return (
    <button onClick={() => onUpdate(newValue)}>
      Update
    </button>
  );
}
```

## Resources

- [React Docs: Sharing State Between Components](https://react.dev/learn/sharing-state-between-components)
- [React Docs: Thinking in React](https://react.dev/learn/thinking-in-react)

## License

MIT
