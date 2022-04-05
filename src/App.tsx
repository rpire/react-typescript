import { ReactElement } from 'react';
import './App.scss';
import List from './components/List';
import TempCalc from './components/TempCalc';

type PropType = {
  name: string,
  age: number,
}

const App = ({ name, age }: PropType): ReactElement => {
  const arr: string[] = ['foo', 'boo', 'loo', 'goo', 'zoo'];

  const countElements = (arr: string[]): number => {
    let count = 0;
    arr.forEach(() => { count += 1; });
    return count;
  };

  return (
    <>
      <h1>React + TypeScript</h1>
      <p>
        This project is created for me to practice the React.ts approach to build applications.
      </p>
      <p>
        For example, this is a piece of code in
        <span> TypeScript</span>
        :
      </p>
      <p>
        The array in the code has
        {` ${countElements(arr)} `}
        elements:
      </p>
      <List arr={arr} />
      <p>
        Also, my name is
        {` ${name}, `}
        and I am
        {` ${age} `}
        years old.
      </p>
      <TempCalc />
    </>
  );
};

export default App;
