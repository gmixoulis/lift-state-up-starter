// TODO: Import useState from React

/**
 * Exercise 1: Music Player
 *
 * Goal: Learn how to lift state up so multiple components can share the same data
 *
 * Current Problem:
 * - The NowPlaying display and PlayerControls are sibling components
 * - They both need to access and modify the same playback state
 * - Currently, the state is not accessible to both components
 *
 * Your Task:
 * - Lift the music player state up to the parent component (Exercise1SharedCounter)
 * - Pass the state down to NowPlaying as props
 * - Pass handler functions down to PlayerControls as props
 * - Make both components work together with shared state
 */

type Song = {
  title: string;
  artist: string;
};

const playlist: Song[] = [
  { title: "Bohemian Rhapsody", artist: "Queen" },
  { title: "Hotel California", artist: "Eagles" },
  { title: "Imagine", artist: "John Lennon" },
];

// TODO: Add proper type definitions for the props
// What information does the display need to show the current song and status?
function NowPlaying(/* Add props here */) {
  return (
    <div className="counter-display">
      {/* TODO: Display the current song and playing status from props */}
      <h3>Now Playing: ???</h3>
      <p>Artist: ???</p>
      <p>Status: ???</p>
    </div>
  );
}

// TODO: Add proper type definitions for the props
// What actions can the user perform? What handlers do you need?
function PlayerControls(/* Add props here */) {
  return (
    <div className="button-group">
      {/* TODO: Wire up the button onClick handlers */}
      <button type="button">⏮ Previous</button>
      <button type="button">⏯ Play/Pause</button>
      <button type="button">⏭ Next</button>
    </div>
  );
}

// Parent component that should hold the shared state
export function Exercise1SharedCounter() {
  // TODO: What state do you need to track?
  // Think about: Which song is currently selected? Is it playing or paused?

  // TODO: Create handler functions
  // What should happen when each button is clicked?
  // How do you move to the next song? What happens at the end of the playlist?
  // How do you move to the previous song? What happens at the start?

  return (
    <div className="exercise-card">
      <h2>Exercise 1: Music Player</h2>
      <p>
        Lift the player state up to this parent component so both the display
        and controls can access it.
      </p>

      {/* TODO: Pass the necessary props to NowPlaying */}
      {/* What data does it need to display? */}
      <NowPlaying />

      {/* TODO: Pass the necessary props to PlayerControls */}
      {/* What functions does it need to modify the state? */}
      <PlayerControls />
    </div>
  );
}
