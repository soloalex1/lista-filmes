import { ControllerRenderProps } from 'react-hook-form';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { FilterType, Genre } from '@/types';

type GenreFilterProps = {
  genres: Genre[];
} & ControllerRenderProps<FilterType, 'genre'>;

const GenreFilter = ({ genres }: GenreFilterProps) => {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Selecione um gênero..." />
      </SelectTrigger>
      <SelectContent>
        {genres.map(({ id, name }) => (
          <SelectItem key={id} value={`${id}`}>
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default GenreFilter;
