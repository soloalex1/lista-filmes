import Card from "../Card";

const List = ({ list = [], ...attr }) => {
  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-3 grid-rows-10 lg:grid-rows-5 gap-4 lg:gap-6 px-2 lg:px-4 my-4 "
      {...attr}
    >
      {list.length &&
        list.map((filme) => <Card key={filme.id} filme={filme} />)}
    </section>
  );
};

export default List;
