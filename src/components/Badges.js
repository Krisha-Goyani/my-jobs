import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import StyledHeading from './StyledHeading';
import Image from 'next/image';

const Badges = () => {
  const { userData } = useContext(UserContext);

  return (
    <div className="mb-5 md:mb-8">
      <StyledHeading>Badges</StyledHeading>
      <div className="flex gap-4 mt-2 md:mt-4">
        {userData.badges.map((badge) => (
          <div key={badge.id} className="relative">
            <Image
              src={`/image/${badge.type}.png`}
              alt={`${badge.type} verification badge`}
              title={`${badge.type} verification status`}
              width={38}
              height={38}
              className="border-0 rounded-full w-9 h-9"
            />
            {badge.isVerified && (
              <div className="absolute w-3 h-3 bg-green-500 rounded-full flex items-center justify-center" 
                   style={{ top: '-0.01rem', right: '-0.02rem' }}
              >
                <svg 
                  className="w-2 h-2 text-white" 
                  viewBox="0 0 10 8" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M1 4L3.5 6.5L9 1" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Badges; 