import { Exercise1SharedCounter } from './exercises/Exercise1SharedCounter'
import { Exercise2TodoList } from './exercises/Exercise2TodoList'
import { Exercise3TemperatureConverter } from './exercises/Exercise3TemperatureConverter'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Lifting State Up - Exercises</h1>
        <p>Complete the TODOs in each exercise to practice lifting state up in React</p>
      </header>

      <main className="exercises-container">
        <Exercise1SharedCounter />
        <Exercise2TodoList />
        <Exercise3TemperatureConverter />
      </main>
    </div>
  )
}

export default App
