import React from 'react';

import Header from '@/components/Header';

type ScreenProps = {
  title?: string;
  renderArrow?: boolean;
  children: JSX.Element | JSX.Element[];
};

const Screen: React.FC<ScreenProps> = ({
  // title = '',
  children,
}: // renderArrow = false,
ScreenProps) => {
  return (
    <>
      <Header />
      <main className="w-full h-full mt-2 grid grid-cols-main">
        <div className="col-start-2">{children}</div>
      </main>
    </>
  );
};

export default Screen;
