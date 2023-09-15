/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import Card from "components/Card";

const List = ({ items, ...attr }) => {
  const hasMovies = items.length > 0;

  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-3 grid-rows-10 lg:grid-rows-6 gap-4 lg:gap-6 px-2 lg:px-4 my-4"
      {...attr}
    >
      {hasMovies && items.map((filme) => <Card key={filme.id} movie={filme} />)}
    </section>
  );
};

export default List;
