import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import StyledHeading from "./StyledHeading";
import Image from "next/image";

const TradeCertificates = () => {
  const { userData } = useContext(UserContext);

  return (
    <div className="mb-10">
      <StyledHeading>Trade Certifications</StyledHeading>
      <div className="grid grid-cols-3 gap-2  mt-4">
        {userData.tradeCertificates.map((cert) => (
          <div key={cert.id} className="">
            <Image
              src={cert.image}
              alt={cert.alt}
              width={140}
              height={140}
              className=" h-36 w-36 border-1 border-border-gray rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradeCertificates;
