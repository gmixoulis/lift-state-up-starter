// TODO: Import useState from React

/**
 * Exercise 3: Markdown Editor with Live Preview
 *
 * Goal: Learn how to keep synchronized components with derived/computed values
 *
 * Current Problem:
 * - The MarkdownInput and MarkdownPreview need to stay in sync
 * - When you type in the input, the preview should update automatically
 * - We need a single source of truth for the markdown content
 *
 * Your Task:
 * - Lift the markdown text state up to the parent component
 * - Create a change handler for the input
 * - Pass the text to both the input (for editing) and preview (for displaying)
 * - Implement basic markdown rendering in the preview
 *
 * Key Concept:
 * The preview is a "derived value" - it's computed from the markdown text.
 * One piece of state (the raw text) drives two different views.
 */

// You'll implement a function to convert markdown to HTML below
// Research: How does String.replace() work with regex patterns?

// Child component for markdown input
function MarkdownInput({
  text,
  onTextChange
}: {
  text: string;
  onTextChange: (value: string) => void;
}) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <h3>Editor</h3>
      <textarea
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder="Type markdown here...
# Heading
**bold** *italic*
- List item"
        style={{
          width: "100%",
          minHeight: "200px",
          padding: "12px",
          fontFamily: "monospace",
          fontSize: "14px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          resize: "vertical"
        }}
      />
      <p style={{ fontSize: "0.8em", color: "#666", marginTop: "8px" }}>
        Character count: {text.length}
      </p>
    </div>
  );
}

// Child component for markdown preview
function MarkdownPreview({
  text,
  renderMarkdown
}: {
  text: string;
  renderMarkdown: (markdown: string) => string;
}) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <h3>Preview</h3>
      <div
        style={{
          width: "100%",
          minHeight: "200px",
          padding: "12px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          backgroundColor: "#f9f9f9"
        }}
      >
        {text ? (
          <div dangerouslySetInnerHTML={{ __html: renderMarkdown(text) }} />
        ) : (
          <p style={{ color: "#999" }}>Preview will appear here...</p>
        )}
      </div>
    </div>
  );
}

// Parent component that manages the shared markdown state
export function Exercise3MarkdownEditor() {
  // TODO: What state do you need?
  // Think: What's the single source of truth for the editor and preview?

  // TODO: Create a change handler
  // What happens when the user types in the editor?

  // TODO: Create a function to convert markdown to HTML
  // Research: How does String.replace() work with regex?
  // Try handling these cases:
  // - # Heading → <h1>Heading</h1>
  // - **bold** → <strong>bold</strong>
  // - *italic* → <em>italic</em>
  // - - List item → <li>List item</li>
  // Challenge: How do you wrap multiple <li> elements in a <ul>?

  return (
    <div className="exercise-card">
      <h2>Exercise 3: Markdown Editor</h2>
      <p>
        The editor and preview need to stay in sync. Lift the markdown text state up
        and pass it to both components.
      </p>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {/* TODO: What props does the input need? */}
        <MarkdownInput
          text=""
          onTextChange={() => {}}
        />

        {/* TODO: What props does the preview need? */}
        <MarkdownPreview
          text=""
          renderMarkdown={(md) => md}
        />
      </div>
    </div>
  );
}
