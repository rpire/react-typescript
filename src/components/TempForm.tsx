import { ChangeEvent, useState } from 'react';
import { initialTemperatures, calculateTemperatures } from '../logic/temperatures';

const TempForm = () => {
  const [temperatures, setTemperatures] = useState(initialTemperatures);

  const handleTemperatues = (e: ChangeEvent): void => calculateTemperatures(e, setTemperatures);

  return (
    <form>
      <label htmlFor="celsius">
        <input
          id="celsius"
          type="number"
          name="celsius"
          value={temperatures.celsius}
          onChange={handleTemperatues}
          className="temp-input"
          placeholder="Enter a temperature in ºC"
        />
        Temperature in ºC
      </label>
      <label htmlFor="farenheit">
        <input
          id="farenheit"
          type="number"
          name="farenheit"
          value={temperatures.farenheit}
          onChange={handleTemperatues}
          className="temp-input"
          placeholder="Enter a temperature in ºF"
        />
        Temperature in ºF
      </label>
    </form>
  );
};

export default TempForm;
