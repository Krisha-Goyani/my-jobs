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
        {userData.tradeCertificates.map((cert, index) => (
          <div key={cert.id} className="">
            <Image
              src={cert.image}
              alt={`Trade Certificate ${cert.alt}`}
              title={`Trade Certificate ${index + 1}`}
              width={80}
              height={80}
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradeCertificates;
