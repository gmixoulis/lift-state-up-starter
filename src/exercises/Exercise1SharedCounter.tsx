// TODO: Import useState from React
// import { useState } from "react";

/**
 * Exercise 1: Shared Counter
 *
 * Goal: Learn how to lift state up so multiple components can share the same data
 *
 * Current Problem:
 * - The CounterDisplay and CounterControls are sibling components
 * - They both need to access and modify the same counter value
 * - Currently, the state is not accessible to both components
 *
 * Your Task:
 * - Lift the counter state up to the parent component (Exercise1SharedCounter)
 * - Pass the state down to CounterDisplay as a prop
 * - Pass handler functions down to CounterControls as props
 * - Make both components work together with shared state
 */

// TODO: Add proper type definitions for the props
// Hint: What data does this component need to display?
function CounterDisplay(/* Add props here */) {
  return (
    <div className="counter-display">
      {/* TODO: Display the count value from props */}
      Count: ???
    </div>
  );
}

// TODO: Add proper type definitions for the props
// Hint: What event handlers does this component need?
function CounterControls(/* Add props here */) {
  return (
    <div className="button-group">
      {/* TODO: Wire up the button onClick handlers */}
      {/* Hint: Use the handler functions passed down via props */}
      <button>-</button>
      <button>Reset</button>
      <button>+</button>
    </div>
  );
}

// Parent component that should hold the shared state
export function Exercise1SharedCounter() {
  // TODO: Create state for the counter
  // Hint: Use the useState hook to create a count state variable
  // const [count, setCount] = useState(???);

  // TODO: Create handler functions for increment, decrement, and reset
  // Hint: These functions should update the count state
  // const handleIncrement = () => { ??? };
  // const handleDecrement = () => { ??? };
  // const handleReset = () => { ??? };

  return (
    <div className="exercise-card">
      <h2>Exercise 1: Shared Counter</h2>
      <p>
        Lift the counter state up to this parent component so both the display
        and controls can access it.
      </p>

      {/* TODO: Pass the count state to CounterDisplay */}
      <CounterDisplay />

      {/* TODO: Pass the handler functions to CounterControls */}
      <CounterControls />
    </div>
  );
}
