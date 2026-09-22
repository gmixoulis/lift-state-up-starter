## Current Session State

### Completed

- [x] Explored project setup and inspected Exercise 1 starter code
- [x] Solved Exercise 1: Music Player (lifted state, typed props, navigation with wrapping, play/pause toggle)
- [x] Solved Exercise 2: Chat Application (lifted message array and ID counter, send message handler, react counter handler, empty state)

### In Progress

- [ ] Exercise 3: Markdown Editor with Live Preview

### Decisions Made

- Stored messages as array state and nextId as monotonic counter in parent
- Implemented immutable array updates using spread `[...previousMessages, newMessage]` and `.map()` for reaction increments
- Child components typed with single props object and action callbacks

### Blocked

- None
