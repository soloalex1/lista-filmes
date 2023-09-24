import { useHistory } from "react-router-dom";

import Search from "@/components/Search";

import { ReactComponent as ArrowLeftIcon } from "@/assets/arrow-left.svg";

type HeaderProps = {
  name?: string;
  renderArrow: boolean;
};

const Header = ({ renderArrow = false }: HeaderProps) => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <header className="bg-transparent sticky z-30 h-20 md:h-24 md:py-2 px-4 w-full">
      <nav className="h-full flex justify-between items-center md:pl-4">
        {renderArrow && (
          <button
            className="text-shadow text-black bg-gray-200 bg-opacity-50 rounded-full h-10 w-10 p-2 mr-4 md:mr-8"
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
