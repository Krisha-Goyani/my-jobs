import React, { useContext, useState } from 'react';
import { SkillContext } from '../context/SkillContext';
import StyledHeading from './StyledHeading';

const Skill = () => {
    const { skills } = useContext(SkillContext);
    const [expandedSkills, setExpandedSkills] = useState({});
    const [isExpanded, setIsExpanded] = useState(false);
    
    // Show first 5 skills if not expanded
    const visibleSkills = isExpanded ? skills : skills.slice(0, 5);

    const toggleSkillExpansion = (index) => {
        setExpandedSkills(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    
    return (
        <div className="mt-5 md:mt-8">
            <StyledHeading>Skills</StyledHeading>
            <div className="mt-2 md:mt-4 flex flex-col gap-3 max-w-[776px] w-full">
                {visibleSkills.map((skill, index) => (
                    <div key={index} className="bg-[#F8F9FC] rounded-lg md:px-5 px-3 py-3">
                        <h3 className="text-sm text-[#1A1C1E] font-medium font-circular-std">
                            {skill.category}
                        </h3>
                        <div className="font-circular-std text-sm text-[#6C7072] mt-2">
                            {expandedSkills[index]
                                ? skill.fullDescription
                                : skill.fullDescription.length > 150
                                ? `${skill.fullDescription.slice(0, 150)}...`
                                : skill.fullDescription
                            }
                            {skill.fullDescription.length > 150 && (
                                <button 
                                    className="text-text-red font-circular-std ml-1 hover:underline cursor-pointer inline-block"
                                    onClick={() => toggleSkillExpansion(index)}
                                >
                                    {expandedSkills[index] ? 'See less' : 'See more'}
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            
            {/* View more/less button - Show only if there are more than 5 skills */}
            {skills.length > 5 && (
                <button
                    onClick={toggleExpand}
                    className="mt-10 md:mb-20 mb-10 px-6 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-50 transition-colors"
                >
                    {isExpanded ? "View less" : "View more"}
                </button>
            )}
        </div>
    );
};

export default Skill;