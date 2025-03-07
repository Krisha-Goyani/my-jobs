import React, { useContext } from 'react';
import { SkillContext } from '../context/SkillContext';
import StyledHeading from './StyledHeading';

const Skill = () => {
    const { skills, toggleExpand } = useContext(SkillContext);
    
    return (
        <div className="mt-8">
            <StyledHeading>Skills</StyledHeading>
            <div className="mt-4 flex flex-col gap-4">
                {skills.map((skill, index) => (
                    <div key={index} className="bg-[#F8F9FC] rounded-lg p-4">
                        <h3 className="text-sm font-medium">{skill.category}</h3>
                        <p className="text-sm text-[var(--black-tertiary)] mt-2">
                            {skill.expanded ? skill.fullDescription : skill.description}
                            {skill.hasMore && (
                                <button 
                                    className="text-red-500 ml-1 hover:underline cursor-pointer"
                                    onClick={() => toggleExpand(index)}
                                >
                                    {skill.expanded ? 'See less' : 'See more'}
                                </button>
                            )}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skill;