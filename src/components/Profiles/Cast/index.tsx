import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { getProfileInitials } from '@/lib/utils';

import { CastEntry } from '@/types';

type CastProfileProps = {
  profile: CastEntry;
};

const CastProfile = ({ profile }: CastProfileProps) => {
  return (
    <div className="flex items-center gap-4" key={profile.cast_id}>
      <Avatar>
        <AvatarImage
          alt={`Foto de perfil de ${profile.name}`}
          src={`https://image.tmdb.org/t/p/original/${profile.profile_path}`}
          loading="lazy"
        />
        <AvatarFallback>{getProfileInitials(profile.name)}</AvatarFallback>
      </Avatar>
      <div>
        <h3 className="text-lg font-semibold">{profile.name}</h3>
        {profile.character && (
          <p className="text-gray-500 dark:text-gray-400">
            como {profile.character}
          </p>
        )}
      </div>
    </div>
  );
};

export default CastProfile;
