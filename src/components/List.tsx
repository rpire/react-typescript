type PropType = {
  arr: string[],
}

const List = ({ arr }: PropType) => (
  <ol>
    {arr.map((element) => (
      <li key={element}>{element}</li>
    ))}
  </ol>
);

export default List;
