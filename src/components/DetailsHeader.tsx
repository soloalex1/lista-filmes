import { ArrowLeftIcon } from 'lucide-react';

const DetailsHeader = () => {
  return (
    <div className="px-4 lg:px-0 py-4 md:py-6 flex items-center justify-between w-full col-start-2">
      <a
        href="/"
        className="inline-flex items-center gap-2 rounded-md bg-gray-900/50 px-3 py-2
         text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-gray-900/70
          focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50/50
           dark:text-gray-900 dark:hover:bg-gray-50/70 dark:focus:ring-gray-300"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        Voltar
      </a>
    </div>
  );
};

export default DetailsHeader;
