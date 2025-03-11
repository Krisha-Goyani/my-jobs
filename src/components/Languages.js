import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import StyledHeading from './StyledHeading';

const Languages = () => {
    const { userData } = useContext(UserContext);
    return (
        <div>
            <StyledHeading>Spoken Languages</StyledHeading>
            <div className="mt-4 md:block">
                <ul className="flex md:flex-wrap overflow-x-auto md:overflow-visible gap-3 pb-2 md:pb-0 scrollbar-hide">
                    {userData.languages.map((language, index) => (
                        <li 
                            key={index} 
                            className="text-base text-text-black-secondary font-normal bg-bg-blue-light px-5 py-2 rounded-md font-circular-std whitespace-nowrap flex-shrink-0"
                        >
                            {language}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Languages;