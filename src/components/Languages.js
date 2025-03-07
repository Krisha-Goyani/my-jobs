import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import StyledHeading from './StyledHeading';

const Languages = () => {
    const { userData } = useContext(UserContext);
    return (
        <div>
            <StyledHeading>Spoken Languages</StyledHeading>
            <ul className="mt-4 flex flex-wrap gap-3">
                {userData.languages.map((language, index) => (
                    <li key={index} className="text-base text-[var(--black-tertiary)] font-normal bg-[var(--blue-light)] px-3 py-2 rounded-md px-5 py-2 font-circular-std">{language}</li>
                ))}
            </ul>
        </div>
    );
};

export default Languages;