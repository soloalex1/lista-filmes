import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { getProfileInitials } from '@/lib/utils';

import { CrewEntry } from '@/types';

type DirectorProfileProps = {
  director: CrewEntry;
};

const DirectorProfile = ({ director }: DirectorProfileProps) => {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage
          src={`https://image.tmdb.org/t/p/original/${director.profile_path}`}
        />
        <AvatarFallback>{getProfileInitials(director.name)}</AvatarFallback>
      </Avatar>
      <div>
        <h3 className="text-lg font-semibold">{director.name}</h3>
      </div>
    </div>
  );
};

export default DirectorProfile;
