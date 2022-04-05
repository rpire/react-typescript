import { FunctionComponent } from 'react';
import TempForm from './TempForm';
import './TempCalc.scss';

const TempCalc: FunctionComponent = () => (
  <section>
    <h2>Temperature Calculator</h2>
    <p>
      I won&apos;t be to especific with the details, just because I&apos;m
      practicing. But, what this will do is take a temperature in one unit and
      transform to another.
    </p>
    <TempForm />
  </section>
);

export default TempCalc;
