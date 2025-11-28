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

### Exercise 1: Music Player

**File**: `src/exercises/Exercise1SharedCounter.tsx`

**Goal**: Learn the basics of lifting state up

**Tasks**:
- Create state in the parent for current song index and playing status
- Pass the current song and status to the NowPlaying display component
- Pass handler functions to the PlayerControls component
- Implement play/pause, next, and previous functionality with proper wrapping

**Key Concepts**:
- Parent component holds multiple pieces of related state
- Child components receive data via props
- Child components communicate with parent via callback functions
- Handling state that affects multiple child components

### Exercise 2: Chat Application

**File**: `src/exercises/Exercise2TodoList.tsx`

**Goal**: Learn how to lift state when working with arrays and multiple operations

**Tasks**:
- Create state in the parent for the messages array and next ID
- Implement the `handleSendMessage` function to add new messages
- Implement the `handleReact` function to increment reaction counts
- Pass the correct props to MessageInput and MessageList
- Complete the MessageList to render messages with reactions

**Key Concepts**:
- Managing array state in the parent
- Multiple operations on the same data (add items, update items)
- Using array methods (map for updates, spread for additions)
- Passing both data and event handlers down

### Exercise 3: Markdown Editor with Live Preview

**File**: `src/exercises/Exercise3TemperatureConverter.tsx`

**Goal**: Learn how to keep synchronized components with derived/computed values

**Tasks**:
- Create state for the markdown text
- Create a change handler for the input
- Implement the `renderMarkdown` function to convert markdown to HTML
- Pass the text and handlers to both MarkdownInput and MarkdownPreview
- Connect the editor and preview so they stay in sync

**Key Concepts**:
- Single source of truth for shared data
- Derived/computed values (preview is computed from the raw text)
- One piece of state driving multiple different views
- Processing data before display

**Challenge**: This exercise introduces the concept of derived state - the preview is not stored separately, but computed from the markdown text. You'll also practice basic string manipulation with regex.

## Tips

1. **Start with Exercise 1** - It's the simplest and establishes the core pattern
2. **Read the comments** - They contain helpful hints and guidance
3. **Check the browser console** - TypeScript errors will appear there
4. **Test as you go** - Make small changes and verify they work
5. **Study the pattern summary** - Scroll down to see a general template for lifting state up

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
