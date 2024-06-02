import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { CastEntry } from '@/types';

type ProfileProps = {
  profile: CastEntry;
};

const Profile = ({ profile }: ProfileProps) => {
  const getProfileInitials = ({ name }: CastEntry) =>
    name.split(' ').reduce((acc, curr) => `${acc}${curr}`, '');

  return (
    <div className="flex items-center gap-4" key={profile.cast_id}>
      <Avatar>
        <AvatarImage
          src={`https://image.tmdb.org/t/p/original/${profile.profile_path}`}
        />
        <AvatarFallback>{getProfileInitials(profile)}</AvatarFallback>
      </Avatar>
      <div>
        <h3 className="text-lg font-semibold">{profile.name}</h3>
        <p className="text-gray-500 dark:text-gray-400">
          como {profile.character}
        </p>
      </div>
    </div>
  );
};

export default Profile;