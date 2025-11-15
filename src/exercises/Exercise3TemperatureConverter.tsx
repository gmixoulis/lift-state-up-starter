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
 * Note: Some parts are completed as examples to help you understand the pattern.
 * Follow the same pattern for the parts you need to complete!
 */

type Scale = 'celsius' | 'fahrenheit';

// ✅ COMPLETED: Conversion functions (study these!)
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

  // ✅ COMPLETED: Example handler for Celsius input (study this pattern!)
  // When the Celsius input changes:
  // 1. Update the scale to 'celsius' (so we know this is the "source of truth")
  // 2. Update the temperature to the new value
  // const handleCelsiusChange = (value: string) => {
  //   setScale('celsius');
  //   setTemperature(value);
  // };

  // TODO: Create a handler for when the Fahrenheit input changes
  // Hint: Follow the same pattern as handleCelsiusChange above!
  // - Update the scale to 'fahrenheit'
  // - Update the temperature to the new value
  // const handleFahrenheitChange = (value: string) => {
  //   ???
  // };

  // ✅ COMPLETED: Example derived value for Celsius (study this carefully!)
  // This calculates what to show in the Celsius input:
  // - If the user last edited Fahrenheit, convert it to Celsius
  // - If the user last edited Celsius, show it as-is
  // - Handle edge cases (empty or invalid input)
  // const celsius = scale === 'fahrenheit'
  //   ? temperature && !isNaN(Number(temperature))
  //     ? toCelsius(Number(temperature)).toFixed(1)
  //     : ''
  //   : temperature;

  // TODO: Calculate what to display in the Fahrenheit input
  // Hint: Follow the SAME pattern as the celsius calculation above!
  // - If scale is 'celsius', convert temperature to fahrenheit
  // - If scale is 'fahrenheit', show temperature as-is
  // - Handle empty or invalid inputs (return empty string)
  // - Use toFahrenheit() and .toFixed(1)
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
        {/*
          Hint: Uncomment the state/handlers above first, then:
          - Celsius input needs: scale="celsius", temperature={celsius}, onTemperatureChange={handleCelsiusChange}
          - Fahrenheit input needs: scale="fahrenheit", temperature={fahrenheit}, onTemperatureChange={handleFahrenheitChange}
        */}
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
