import React from 'react';

import Header from '@/components/Header';

type ScreenProps = {
  children: JSX.Element | JSX.Element[];
};

const Screen: React.FC<ScreenProps> = ({ children }: ScreenProps) => {
  return (
    <main className="w-full h-full mt-2 grid grid-cols-main">{children}</main>
  );
};

export default Screen;
