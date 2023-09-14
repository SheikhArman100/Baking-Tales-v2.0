import Image from "next/image";
import React from "react";
import SectionTitle from "./SectionTitle";

const JournalCard = ({ image, title }) => {
  return (
    <div className="flex flex-col items-center gap-y-2">
      <Image
        src={image}
        alt="Journal card image"
        className="w-full h-52 lg:h-72 object-cover scale-95 hover:scale-100 transition-all duration-300 rounded "
      />

      <div>
        {/* date */}
      <SectionTitle title="13 August,2023" />

      {/* title */}
      <h3 className="text-center text-xl text-textColor font-semibold capitalize">
        {title}
      </h3>
      </div>
    </div>
  );
};

export default JournalCard;
