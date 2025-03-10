import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import StyledHeading from './StyledHeading';

const About = () => {
    const { userData } = useContext(UserContext);
    return (
        <div className="max-w-[776px] w-full h-[99px] mb-10">
            <StyledHeading>About</StyledHeading>
            <p className="font-circular-std text-sm mt-3 text-base text-text-black-primary font-normal leading-[24px]">{userData.about}</p>
        </div>
    );
};

export default About;