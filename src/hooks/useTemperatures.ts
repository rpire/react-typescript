import { ChangeEvent, useState } from 'react';
import fixTemp from '../logic/temperature';

type ConvertFunc = (event: ChangeEvent) => void;

type Hook<K> = {
  temperatures: K;
  convertTemperatures: ConvertFunc;
}

const useTemperatures = <T>(initialState: T): Hook<T> => {
  const [temperatures, setTemperatures] = useState(initialState);

  const convertTemperatures = (event: ChangeEvent): void => {
    const { value: temperature, name: unit } = event.target as HTMLInputElement;

    if (unit === 'celsius') {
      setTemperatures({
        ...temperatures,
        celsius: temperature,
        farenheit: fixTemp(temperature, unit),
      });
    } else {
      setTemperatures({
        ...temperatures,
        celsius: fixTemp(temperature, unit),
        farenheit: temperature,
      });
    }
  };
  return { temperatures, convertTemperatures };
};

export default useTemperatures;
