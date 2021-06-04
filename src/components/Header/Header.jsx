import { useHistory } from "react-router-dom";
import Search from "../Search";

import { ReactComponent as ArrowLeftIcon } from "../../assets/arrow-left.svg";

const Header = ({ name, arrowBack = false, ...attr }) => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <header
      className="bg-transparent sticky z-30 h-12 lg:h-24 py-2 px-12 w-full"
      {...attr}
    >
      <nav className="h-full flex justify-between items-center lg:pl-4">
        {/* <h2 className="text-2xl font-bold self-center">{name}</h2> */}
        {arrowBack && (
          <button
            className="text-shadow text-gray-600 bg-gray-200 rounded-full h-10 w-10 p-2"
            onClick={goBack}
          >
            <ArrowLeftIcon className="fill-current h-full w-full" />
          </button>
        )}
        <Search />
      </nav>
    </header>
  );
};

export default Header;
