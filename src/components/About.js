import React, { useState, useContext, useRef, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import StyledHeading from './StyledHeading';

const About = () => {
    const { userData } = useContext(UserContext);
    const [isExpanded, setIsExpanded] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        const checkTextHeight = () => {
            const element = textRef.current;
            if (element) {
                // Get line height and total height
                const lineHeight = parseInt(window.getComputedStyle(element).lineHeight);
                const totalHeight = element.scrollHeight;
                
                // Check if text is more than 3 lines
                setShowButton(totalHeight > lineHeight * 3);
            }
        };

        checkTextHeight();
        window.addEventListener('resize', checkTextHeight);
        return () => window.removeEventListener('resize', checkTextHeight);
    }, [userData.about]);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="max-w-[776px] w-full mb-10">
            <StyledHeading>About</StyledHeading>
            <div className="relative">
                <p 
                    ref={textRef}
                    className={`font-circular-std text-sm mt-3 text-base text-text-black-primary font-normal leading-[24px] ${!isExpanded ? 'line-clamp-3' : ''}`}
                >
                    {userData.about}
                </p>
                {showButton && (
                    <button 
                        onClick={toggleExpand}
                        className="text-text-red hover:text-red-700 text-sm mt-1 font-medium"
                    >
                        {isExpanded ? 'View less' : 'View more'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default About;