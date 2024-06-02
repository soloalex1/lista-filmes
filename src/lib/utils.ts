import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getProfileInitials = (name: string): string => {
  return name
    .split(' ')
    .slice(0, 2)
    .reduce((acc, curr) => `${acc}${curr[0]}`, '');
};
