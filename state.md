## Current Session State

### Completed

- [x] Explored project setup and inspected Exercise 1 starter code
- [x] Solved Exercise 1: Music Player (lifted state, typed props, navigation with wrapping, play/pause toggle)

### In Progress

- [ ] Exercise 2: Chat Application

### Decisions Made

- Stored `currentSongIndex` as a number for cyclic index math and derived `currentSong = playlist[currentSongIndex]`
- Passed action callbacks `onPrevious`, `onTogglePlay`, `onNext` down to `PlayerControls`
- Managed `isPlaying` boolean state in parent and passed down to both child components

### Blocked

- None
