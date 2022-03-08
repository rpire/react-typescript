import { ChangeEvent } from 'react';

export const initialTemperatures = {
  celsius: '',
  farenheit: '',
};

const fixTemp = (temperature: number): string => temperature.toFixed(2);

export const calculateTemperatures = (e: ChangeEvent, setTemperatures: CallableFunction): void => {
  const target = e.target as HTMLInputElement;
  const temperature = Number(target.value);

  if (target.name === 'celsius') {
    setTemperatures({
      celsius: temperature.toString(),
      farenheit: fixTemp(temperature * 1.8 + 32),
    });
  } else {
    setTemperatures({
      celsius: fixTemp((temperature - 32) / 1.8),
      farenheit: temperature.toString(),
    });
  }
};
