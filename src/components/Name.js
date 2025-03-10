import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Image from "next/image";

const Name = () => {
  const { userData } = useContext(UserContext);
  return (
    <div className="mb-8">
      <h1 className="md:text-4xl xs:text-2xl font-bold ">
        {userData.name}
      </h1>
      <p className="font-circular-std flex items-center gap-2 text-sm mt-3 text-lg text-text-gray font-medium">
        <Image className="h-3 w-3" src="/images/star.png" alt="star" width={13} height={13} />{" "}
        {userData.rating} • {userData.reviews} Reviews 
        <span className="hidden md:inline">• {userData.experience}</span>
      </p>

      <p className="text-sm mt-4 flex items-center gap-2 font-circular-std">
        <span>
          <Image
            src="/images/location.png"
            alt="location"
            width={28}
            height={28}
          />
        </span>
        {userData.location}
      </p>

      <div className="relative -mx-9 h-12 my-5 bg-info-bg md:hidden flex items-center justify-center text-center ">
        Info
      </div>
    </div>
  );
};

export default Name;
