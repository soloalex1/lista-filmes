import Header from "@/components/Header";
import React from "react";

type ScreenProps = {
  title?: string;
  renderArrow?: boolean;
  children: JSX.Element | JSX.Element[];
};

const Screen: React.FC<ScreenProps> = ({
  title = "",
  children,
  renderArrow = false,
}: ScreenProps) => {
  return (
    <>
      <Header name={title} renderArrow={renderArrow} />
      <main className="w-full h-full mt-2">{children}</main>
    </>
  );
};

export default Screen;
