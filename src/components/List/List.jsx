import Card from "../Card/Card";

const List = ({ list = [], ...attr }) => {
  return (
    <section
      className="grid grid-cols-3 grid-rows-5 gap-6 px-4 my-4 mx-1 lg:-mx-4"
      {...attr}
    >
      {list.length &&
        list.map((filme) => <Card key={filme.id} filme={filme} />)}
    </section>
  );
};

export default List;
