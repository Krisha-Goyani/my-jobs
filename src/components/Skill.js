import React, { useContext } from 'react';
import { SkillContext } from '../context/SkillContext';
import StyledHeading from './StyledHeading';

const Skill = () => {
    const { skills, toggleExpand } = useContext(SkillContext);
    
    return (
        <div className="mt-8">
            <StyledHeading>Skills</StyledHeading>
            <div className="mt-4 flex flex-col gap-3 max-w-[776px] w-full">
                {skills.map((skill, index) => (
                    <div key={index} className="bg-[#F8F9FC] rounded-lg px-5 py-3">
                        <h3 className="text-sm text-[#1A1C1E] font-medium font-circular-std">
                            {skill.category}
                        </h3>
                        <div className="font-circular-std text-sm text-[#6C7072] mt-2">
                            {skill.expanded ? skill.fullDescription : skill.description}
                            {skill.fullDescription.length > 200 && (
                                <button 
                                    className="text-[#E31B54] ml-1 hover:underline cursor-pointer inline-block"
                                    onClick={() => toggleExpand(index)}
                                >
                                    {skill.expanded ? 'See less' : 'See more'}
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skill;