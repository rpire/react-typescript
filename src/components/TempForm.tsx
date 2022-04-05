import { FunctionComponent } from 'react';
import useTemperatures from '../hooks/useTemperatures';

interface State {
  celsius: string;
  farenheit: string;
}

const TempForm: FunctionComponent = () => {
  const initTemperatures = {
    celsius: '',
    farenheit: '',
  };

  const { temperatures, convertTemperatures } = useTemperatures<State>(initTemperatures);

  return (
    <form>
      <label htmlFor="celsius">
        <input
          id="celsius"
          type="number"
          name="celsius"
          value={temperatures.celsius}
          onChange={convertTemperatures}
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
          onChange={convertTemperatures}
          className="temp-input"
          placeholder="Enter a temperature in ºF"
        />
        Temperature in ºF
      </label>
    </form>
  );
};

export default TempForm;
