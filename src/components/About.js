import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import StyledHeading from './StyledHeading';

const About = () => {
    const { userData } = useContext(UserContext);
    return (
        <div className="w-[776px] h-[99px] mb-10">
            <StyledHeading>About</StyledHeading>
            <p className="text-sm mt-3 text-base text-[var(--black-secondary)] font-normal leading-[24px]">{userData.about}</p>
        </div>
    );
};

export default About;