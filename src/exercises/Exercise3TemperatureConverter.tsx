// TODO: Import useState from React
// import { useState } from "react";

/**
 * Exercise 3: Temperature Converter
 *
 * Goal: Learn how to lift state up when multiple inputs need to stay synchronized
 *
 * Current Problem:
 * - Two input fields (Celsius and Fahrenheit) need to show the same temperature
 * - When you change one, the other should update automatically
 * - We need a single source of truth for the temperature value
 *
 * Your Task:
 * - Lift the temperature state up to the parent component
 * - Create separate change handlers for each input
 * - Implement the conversion logic to keep both inputs synchronized
 * - Track which scale (celsius or fahrenheit) was last edited
 *
 * Key Concept:
 * You need TWO pieces of state: the temperature value AND which scale it's in.
 * Then calculate what to display in each input based on those two pieces.
 */

type Scale = 'celsius' | 'fahrenheit';

// Helper functions for converting between temperature scales
// You can use these in your solution!
function toCelsius(fahrenheit: number): number {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius: number): number {
  return (celsius * 9 / 5) + 32;
}

// Child component for temperature input
function TemperatureInput({
  scale,
  temperature,
  onTemperatureChange
}: {
  scale: Scale;
  temperature: string;
  onTemperatureChange: (value: string) => void;
}) {
  const scaleNames = {
    celsius: 'Celsius',
    fahrenheit: 'Fahrenheit'
  };

  return (
    <div className="temp-input-group">
      <label className="temp-label">
        Enter temperature in {scaleNames[scale]}:
      </label>
      <input
        type="number"
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
        placeholder={`°${scale === 'celsius' ? 'C' : 'F'}`}
      />
    </div>
  );
}

// Parent component that manages the shared temperature state
export function Exercise3TemperatureConverter() {
  // TODO: Create state for the temperature value
  // Hint: Store it as a string to handle empty inputs
  // const [temperature, setTemperature] = useState('');

  // TODO: Create state to track which scale was last edited
  // Hint: This determines whether temperature is in celsius or fahrenheit
  // const [scale, setScale] = useState<Scale>('celsius');

  // TODO: Create handler functions for when each input changes
  // Hint: Each handler needs to:
  // 1. Update the scale to match which input was changed
  // 2. Update the temperature to the new value
  // const handleCelsiusChange = (value: string) => {
  //   ???
  // };
  // const handleFahrenheitChange = (value: string) => {
  //   ???
  // };

  // TODO: Calculate what to display in each input
  // Hint: Think about this logic:
  // - If the user last edited the Celsius input, show temperature as-is in Celsius,
  //   and convert it to Fahrenheit for the other input
  // - If the user last edited the Fahrenheit input, show temperature as-is in Fahrenheit,
  //   and convert it to Celsius for the other input
  // - Handle empty or invalid inputs by returning an empty string
  // - Use .toFixed(1) to round to 1 decimal place after conversion
  // const celsius = ???;
  // const fahrenheit = ???;

  return (
    <div className="exercise-card">
      <h2>Exercise 3: Temperature Converter</h2>
      <p>
        Both input fields need to stay in sync. Lift the temperature state up
        and handle conversions in the parent component.
      </p>
      <div className="temp-converter">
        {/* TODO: Pass the correct props to each TemperatureInput */}
        {/* Hint: Each input needs its scale, the calculated temperature value to display, and its change handler */}
        <TemperatureInput
          scale="celsius"
          temperature=""
          onTemperatureChange={() => {}}
        />
        <TemperatureInput
          scale="fahrenheit"
          temperature=""
          onTemperatureChange={() => {}}
        />
      </div>
    </div>
  );
}
