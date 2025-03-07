import React, { createContext, useState } from "react";

// Create a Context
export const SkillContext = createContext();

// Create a Provider component
export const SkillProvider = ({ children }) => {
  const [skills, setSkills] = useState([
    {
      category: "General > Brickalyer",
      description: "Communication Skills, Cutting, Finishing, Knowledge of Materials, Laying",
      hasMore: false
    },
    {
      category: "General > Brickalyer",
      description: "Communication Skills, Cutting, Finishing, Knowledge of Materials, Laying, Communication Skills, Cutting, Finishing, Knowledge of Materials, Laying, Communication Skills, Cutting, Finis...",
      hasMore: true,
      expanded: false,
      fullDescription: "Communication Skills, Cutting, Finishing, Knowledge of Materials, Laying, Communication Skills, Cutting, Finishing, Knowledge of Materials, Laying, Communication Skills, Cutting, Finishing"
    },
    {
      category: "General > Brickalyer",
      description: "Communication Skills, Cutting, Finishing, Knowledge of Materials, Laying",
      hasMore: false
    },
    {
      category: "General > Brickalyer",
      description: "Communication Skills, Cutting, Finishing, Knowledge of Materials, Laying",
      hasMore: false
    },
    {
      category: "General > Brickalyer",
      description: "Communication Skills, Cutting, Finishing, Knowledge of Materials, Laying",
      hasMore: false
    }
  ]);

  const toggleExpand = (index) => {
    setSkills(skills.map((skill, i) => {
      if (i === index) {
        return {
          ...skill,
          expanded: !skill.expanded,
          description: skill.expanded ? skill.description : skill.fullDescription
        };
      }
      return skill;
    }));
  };

  return (
    <SkillContext.Provider value={{ skills, toggleExpand }}>
      {children}
    </SkillContext.Provider>
  );
};
