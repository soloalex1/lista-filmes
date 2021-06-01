const List = ({ list = [], ...attr }) => {
  return (
    <ul {...attr}>
      {list.map((i) => (
        <li key={i}>{i.nome}</li>
      ))}
    </ul>
  );
};

export default List;
