import { useState } from "react";

/**
 * Exercise 2: Todo List
 *
 * Goal: Learn how to lift state up when working with arrays and multiple operations
 *
 * Current Problem:
 * - TodoInput needs to add items to a list
 * - TodoListDisplay needs to show and delete items from the same list
 * - The list data needs to be shared between these two sibling components
 *
 * Your Task:
 * - Lift the todos array state up to the parent component
 * - Create handler functions for adding and deleting todos
 * - Pass the state and handlers down to the appropriate child components
 * - Make sure the ID generation works correctly
 */

export type Todo = {
  id: number;
  text: string;
};

// Child component for adding new todos
function TodoInput(/* TODO: Add props with proper TypeScript types */) {
  // This component manages its own input field state (not lifted up)
  // Only the todos array is lifted up
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      // TODO: Call the onAdd function passed via props
      // Hint: Pass the inputValue to the parent's add handler
      // ???
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo..."
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

// Child component for displaying todos
function TodoListDisplay(/* TODO: Add props with proper TypeScript types */) {
  // TODO: Get todos array and onDelete function from props

  // TODO: Show a message when there are no todos
  // if (???) {
  //   return <p className="empty-message">No todos yet!</p>;
  // }

  return (
    <ul className="item-list">
      {/* TODO: Map over the todos array and render each todo */}
      {/* Hint: Don't forget the key prop! */}
      {/* Each todo should show the text and a delete button */}
    </ul>
  );
}

// Parent component that should manage the shared todo list state
export function Exercise2TodoList() {
  // TODO: Create state for the todos array
  // Hint: Use useState with an empty array of type Todo[]
  // const [todos, setTodos] = useState<Todo[]>([]);

  // TODO: Create state for tracking the next ID
  // Hint: Start at 1 and increment each time a todo is added
  // const [nextId, setNextId] = useState(1);

  // TODO: Create a handler function to add a new todo
  // Hint:
  // - Take the text as a parameter
  // - Create a new todo object with the nextId and text
  // - Add it to the todos array (remember: don't mutate state!)
  // - Increment the nextId
  // const handleAddTodo = (text: string) => {
  //   ???
  // };

  // TODO: Create a handler function to delete a todo
  // Hint: Use filter to create a new array without the deleted todo
  // const handleDeleteTodo = (id: number) => {
  //   ???
  // };

  return (
    <div className="exercise-card">
      <h2>Exercise 2: Todo List</h2>
      <p>
        Lift the todo list state up so the input can add items and the list can
        display and delete them.
      </p>

      {/* TODO: Pass the handleAddTodo function to TodoInput */}
      <TodoInput />

      {/* TODO: Pass the todos array and handleDeleteTodo function to TodoListDisplay */}
      <TodoListDisplay />
    </div>
  );
}
