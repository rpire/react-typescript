import { FunctionComponent } from 'react';

type PropType = {
  arr: string[],
}

const List: FunctionComponent<PropType> = ({ arr }) => (
  <ol>
    {arr.map((element) => (
      <li key={element}>{element}</li>
    ))}
  </ol>
);

export default List;
