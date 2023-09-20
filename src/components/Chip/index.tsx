import React from "react";

type ChipProps = {
  label: string;
};

const Chip = ({ label }: ChipProps) => {
  return (
    <div className=" h-2 md:h-4 border-white text-xs md:text-md border-2 rounded-lg text-white  p-3 md:p-4 m-1 inline-flex items-center text-center">
      {label}
    </div>
  );
};

export default Chip;
