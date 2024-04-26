import { ArrowLeftIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useHistory } from 'react-router-dom';

import Button from './Button';

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
    <header className="bg-white border-black border-solid border-4 border-x-0 h-24 w-full">
      <nav className="h-full flex justify-between flex-row-reverse">
        <Button
          title="Pesquisar"
          onClick={() => {}}
          icon={
            <MagnifyingGlassIcon className="fill-white stroke-white h-8 w-8" />
          }
        />

        {renderArrow && (
          <Button
            title="Voltar"
            onClick={goBack}
            icon={<ArrowLeftIcon className="fill-white stroke-white h-8 w-8" />}
          />
        )}
      </nav>
    </header>
  );
};

export default Header;
