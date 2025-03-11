import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import StyledHeading from './StyledHeading';
import Image from 'next/image';

const Badges = () => {
  const { userData } = useContext(UserContext);

  return (
    <div className="mb-8">
      <StyledHeading>Badges</StyledHeading>
      <div className="flex gap-4 mt-4">
        {userData.badges.map((badge) => (
          <div key={badge.id} className="relative">
            <Image
              src={`/image/${badge.type}.png`}
              alt={badge.type}
              width={38}
              height={38}
              className="border-0 rounded-full w-9 h-9"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Badges; 