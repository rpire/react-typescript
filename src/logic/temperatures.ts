import { ChangeEvent, useState } from 'react';

type State = {
  celsius: string;
  farenheit: string;
}

type Hook = {
  temperatures: State;
  convertTemperatures: (event: ChangeEvent) => void;
}

const initialTemperatures: State = {
  celsius: '',
  farenheit: '',
};

const useTemperatures = (initialState: State = initialTemperatures): Hook => {
  const [temperatures, setTemperatures] = useState(initialState);

  const fixTemp = (temperature: string, unit: string): string => {
    if (unit === 'CELS') {
      return (Number(temperature) * 1.8 + 32).toFixed(2);
    }
    return ((Number(temperature) - 32) / 1.8).toFixed(2);
  };

  const convertTemperatures = (event: ChangeEvent): void => {
    const target = event.target as HTMLInputElement;
    const temperature = target.value;

    if (target.name === 'celsius') {
      setTemperatures({
        celsius: temperature,
        farenheit: fixTemp(temperature, 'CELS'),
      });
    } else {
      setTemperatures({
        celsius: fixTemp(temperature, 'FARE'),
        farenheit: temperature,
      });
    }
  };
  return { temperatures, convertTemperatures };
};

export default useTemperatures;
