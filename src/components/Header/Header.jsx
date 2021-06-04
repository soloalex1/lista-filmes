import { useHistory } from "react-router-dom";
import Search from "../Search";

const Header = ({ name, arrowBack = false, ...attr }) => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <header
      className="bg-transparent sticky z-30 h-16 py-2 px-12 w-full"
      {...attr}
    >
      <nav className="h-full flex justify-between items-stretch lg:pl-4">
        <h2 className="text-2xl font-bold self-center">{name}</h2>
        {arrowBack && <button onClick={goBack}>Voltar</button>}
        <Search />
      </nav>
    </header>
  );
};

export default Header;
