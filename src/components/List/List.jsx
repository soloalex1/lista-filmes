import { Link } from "react-router-dom";

const List = ({ list = [], ...attr }) => {
  return (
    <ul>
      {list.length &&
        list.map((filme) => (
          <li key={filme.id}>
            {filme.popularity} -{" "}
            <Link to={`/movie/${filme.id}`}>{filme.title}</Link>
          </li>
        ))}
    </ul>
  );
};

export default List;
