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

type MessageInputProps={
  onSendMessage: (message: string) => void;
}


// Child component for sending new messages
function MessageInput({onSendMessage}: MessageInputProps) {
  // This component manages its own input field state (not lifted up)
  // Only the messages array is lifted up
  const [messageText, setMessageText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageText.trim()) {
      // TODO: How do you tell the parent component about the new message?
      // What information does the parent need?
      onSendMessage(messageText.trim())
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

type MessageListProps ={
  messages: Message[];
  onReact: (id: number) => void;
}

// Child component for displaying messages
function MessageList({messages,onReact}: MessageListProps) {
  // TODO: What data does this component need from the parent?
  // What actions can the user perform on messages?

  // TODO: What should display when there are no messages?

  

  return (
    <div>
      <p>{messages.length} message(s)</p>

      {messages.length === 0 ? (
        <p className="empty-message">No messages yet.</p>
      ) : (
        <ul className="item-list">
          {messages.map((message) => (
            <li key={message.id}>
              <span>
                <strong>{message.username}: </strong>
                {message.text}
              </span>
              <button type="button" onClick={() => onReact(message.id)}>
                ❤️ {message.reactions}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Parent component that should manage the shared messages state
export function Exercise2ChatApplication() {

  const [messages, setMessages] = useState<Message[]>([]);
  const [nextId, setNextId] = useState(1);

  const handleSendMessage = (message: string) => {
    const newMessage: Message = {
      username: "User",
      text: message,
      id: nextId,
      reactions: 0,
    };
    setNextId((previousId) => previousId + 1);
    setMessages((previousMessages) => [...previousMessages, newMessage]);
  };

  const handleReact = (id: number) => {
    setMessages((previousMessages) =>
      previousMessages.map((message) =>
        message.id === id ? { ...message, reactions: message.reactions + 1 } : message
      )
    );
  };

  return (
    <div className="exercise-card">
      <h2>Exercise 2: Chat Application</h2>
      <p>
        Lift the messages state up so the input can send messages and the list can
        display them and add reactions.
      </p>

      {/* TODO: What props does MessageList need? */}
      <MessageList 
      messages={messages}
      onReact={handleReact}
      />

      {/* TODO: What props does MessageInput need? */}
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
}
