import { Exercise1MusicPlayer } from './exercises/Exercise1MusicPlayer'
import { Exercise2ChatApplication } from './exercises/Exercise2ChatApplication'
import { Exercise3MarkdownEditor } from './exercises/Exercise3MarkdownEditor'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Lifting State Up - Exercises</h1>
        <p>Complete the TODOs in each exercise to practice lifting state up in React</p>
      </header>

      <main className="exercises-container">
        <Exercise1MusicPlayer />
        <Exercise2ChatApplication />
        <Exercise3MarkdownEditor />
      </main>
    </div>
  )
}

export default App
