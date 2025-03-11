import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import StyledHeading from "./StyledHeading";
import Image from "next/image";

const TradeCertificates = () => {
  const { userData } = useContext(UserContext);

  return (
    <div className="mb-5 md:mb-10">
      <StyledHeading>Trade Certifications</StyledHeading>
      <div className="grid xs:grid-cols-3 xs:max-w-[280px] xs:gap-2 md:max-w-[325px]
                          lg:max-w-[434px] md:grid-cols-3 md:gap-2 mt-4">
        {userData.tradeCertificates.map((cert) => (
          <div key={cert.id} className="">
            <Image
              src={cert.image}
              alt={cert.alt}
              width={140}
              height={140}
              className=" lg:h-36 lg:w-36 h-24 w-24 border-1 border-border-gray rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradeCertificates;
