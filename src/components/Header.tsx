// import { useState } from 'react';
// import { ArrowLeftIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
// import { useHistory } from 'react-router-dom';

// import Button from './Button';

// type HeaderProps = {
//   name?: string;
//   renderArrow: boolean;
// };

const Header = () => {
  // const history = useHistory();

  // const [showSearch, setShowSearch] = useState(false);

  // const toggleSearch = () => {
  //   setShowSearch(!showSearch);
  // };

  // const goBack = () => {
  //   history.goBack();
  // };

  return (
    <header className="bg-white border-black border-solid border-4 border-x-0 h-24 w-full">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-4xl">
        Movie library
      </h1>
      <nav className="h-full flex justify-between flex-row">
        {/* <Button
          title="Pesquisar"
          onClick={toggleSearch}
          icon={
            <MagnifyingGlassIcon className="fill-white stroke-white h-8 w-8" />
          }
        /> */}

        {/*
        {renderArrow && (
          <Button
            title="Voltar"
            onClick={goBack}
            icon={<ArrowLeftIcon className="fill-white stroke-white h-8 w-8" />}
          />
        )} */}
      </nav>
    </header>
  );
};

export default Header;
