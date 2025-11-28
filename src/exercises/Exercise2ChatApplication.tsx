import { useState } from "react";

/**
 * Exercise 2: Chat Application
 *
 * Goal: Learn how to lift state up when working with arrays and multiple operations
 *
 * Current Problem:
 * - MessageInput needs to add messages to a conversation
 * - MessageList needs to display all messages and allow reactions
 * - The messages data needs to be shared between these two sibling components
 *
 * Your Task:
 * - Lift the messages array state up to the parent component
 * - Create handler functions for adding messages and adding reactions
 * - Pass the state and handlers down to the appropriate child components
 * - Make sure the ID generation works correctly
 */

export type Message = {
  id: number;
  username: string;
  text: string;
  reactions: number;
};

// Child component for sending new messages
function MessageInput(/* TODO: Add props with proper TypeScript types */) {
  // This component manages its own input field state (not lifted up)
  // Only the messages array is lifted up
  const [messageText, setMessageText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageText.trim()) {
      // TODO: How do you tell the parent component about the new message?
      // What information does the parent need?
      setMessageText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        placeholder="Type your message..."
      />
      <button type="submit">Send</button>
    </form>
  );
}

// Child component for displaying messages
function MessageList(/* TODO: Add props with proper TypeScript types */) {
  // TODO: What data does this component need from the parent?
  // What actions can the user perform on messages?

  // TODO: What should display when there are no messages?

  return (
    <div>
      {/* TODO: How many messages are there? */}
      <p>??? message(s)</p>

      <ul className="item-list">
        {/* TODO: How do you render a list of messages in React? */}
        {/* What should each message item display? */}
        {/* How does a user add a reaction? */}
      </ul>
    </div>
  );
}

// Parent component that should manage the shared messages state
export function Exercise2ChatApplication() {
  // TODO: What state do you need to manage the messages?
  // Think about: How do you store multiple messages? How do you give each one a unique ID?

  // TODO: Create a handler to add a new message
  // What parameters does it need?
  // How do you add to an array without mutating it?
  // How do you generate the next ID?

  // TODO: Create a handler to add a reaction to a message
  // How do you find the right message?
  // How do you update one item in an array immutably?

  return (
    <div className="exercise-card">
      <h2>Exercise 2: Chat Application</h2>
      <p>
        Lift the messages state up so the input can send messages and the list can
        display them and add reactions.
      </p>

      {/* TODO: What props does MessageList need? */}
      <MessageList />

      {/* TODO: What props does MessageInput need? */}
      <MessageInput />
    </div>
  );
}
