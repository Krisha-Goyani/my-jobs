import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import StyledHeading from './StyledHeading';
import Image from 'next/image';

const AdditionalInfo = () => {
  const { userData } = useContext(UserContext);

  return (
    <div className="mb-5 md:mb-8 xs:mt-5 md:mt-0">
      <StyledHeading>Additional Info</StyledHeading>
      <div className="space-y-4 mt-2 md:mt-5">
        {userData.additionalInfo.map((info) => (
          <div key={info.id} className="flex gap-4 items-center bg-bg-gray-light border border-border-gray-light rounded-xl py-4 px-5">
              <Image
                src={info.icon}
                alt={info.title}
                title={info.title}
                width={24}
                height={24}
                className="w-16 h-16"
              />
              <div className="flex gap-5">
                <div>
                <p className="font-medium">{info.title}</p>
                <p className={`text-sm ${info.status.includes('Not') ? 'text-text-red-secondary' : 'text-text-gray-tertiary'}`}>
                  {info.status}
                </p>
                </div>
                <div className="flex self-end">
              {info.action && (
                <button className="text-text-blue hover:underline">
                  {info.action}
                </button>
              )}
            </div>
              </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdditionalInfo; 