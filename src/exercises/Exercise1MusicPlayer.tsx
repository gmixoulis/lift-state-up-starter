// TODO: Import useState from React
import { useState } from 'react';
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
 * - Lift the music player state up to the parent component (Exercise1MusicPlayer)
 * - Pass the state down to NowPlaying as props
 * - Pass handler functions down to PlayerControls as props
 * - Make both components work together with shared state
 */

type Song = {
  title: string;
  artist: string;
};

type NowPlayingProps = {
  currentSong: Song;
  isPlaying: boolean;
};

type PlayerControlsProps = {
  isPlaying: boolean;
  onPrevious: () => void;
  onTogglePlay: () => void;
  onNext: () => void;
};

const playlist: Song[] = [
  { title: "Bohemian Rhapsody", artist: "Queen" },
  { title: "Hotel California", artist: "Eagles" },
  { title: "Imagine", artist: "John Lennon" },
];

// TODO: Add proper type definitions for the props
// What information does the display need to show the current song and status?
function NowPlaying({ currentSong, isPlaying }: NowPlayingProps) {
  return (
    <div className="counter-display">
      {/* TODO: Display the current song and playing status from props */}
      <h3>Now Playing: {currentSong.title}</h3>
      <p>Artist: {currentSong.artist}</p>
      <p>Status: {isPlaying ? "Playing" : "Paused"}</p>
    </div>
  );
}

// TODO: Add proper type definitions for the props
// What actions can the user perform? What handlers do you need?
function PlayerControls({ isPlaying, onPrevious, onTogglePlay, onNext }: PlayerControlsProps) {
  return (
    <div className="button-group">
      {/* TODO: Wire up the button onClick handlers */}
      <button type="button" onClick={onPrevious}>⏮ Previous</button>
      <button type="button" onClick={onTogglePlay}>
        {isPlaying ? '⏸ Pause' : '▶ Play'}
      </button>
      <button type="button" onClick={onNext}>⏭ Next</button>
    </div>
  );
}

// Parent component that should hold the shared state
export function Exercise1MusicPlayer() {

  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    setIsPlaying((previous) => !previous);
  };
  const handleNext = () => {
    setCurrentSongIndex((previousIndex) => (previousIndex + 1) % playlist.length);
  };
  const handlePrevious = () => {
    setCurrentSongIndex((previousIndex) =>
      previousIndex === 0 ? playlist.length - 1 : previousIndex - 1
    );
  };


  return (
    <div className="exercise-card">
      <h2>Exercise 1: Music Player</h2>
      <p>
        Lift the player state up to this parent component so both the display
        and controls can access it.
      </p>

      {/* TODO: Pass the necessary props to NowPlaying */}
      {/* What data does it need to display? */}
      <NowPlaying currentSong={playlist[currentSongIndex]} isPlaying={isPlaying} />

      {/* TODO: Pass the necessary props to PlayerControls */}
      {/* What functions does it need to modify the state? */}
      <PlayerControls onPrevious={handlePrevious} onTogglePlay={handleTogglePlay} onNext={handleNext} isPlaying={isPlaying} />
    </div>
  );
}
