import React from "react";

import Header from "components/Header";

const Screen = ({ title = "", children, arrowBack = false, ...attr }) => {
  return (
    <>
      <Header name={title} arrowBack={arrowBack} />
      <main className="w-full h-full mt-2" {...attr}>
        {children}
      </main>
    </>
  );
};

export default Screen;
