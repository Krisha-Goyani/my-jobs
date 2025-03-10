import React, { createContext, useState } from "react";

// Create a Context
export const SkillContext = createContext();

// Create a Provider component
export const SkillProvider = ({ children }) => {
  const [skills, setSkills] = useState([
    {
      category: "General > Brickalyer",
      description: "Communication Skills, Cutting, Finishing, Knowledge of Materials, Laying",
      fullDescription: "Communication Skills, Cutting, Finishing, Knowledge of Materials, Laying",
      expanded: false
    },
    {
      category: "General > Brickalyer",
      description: "Communication Skills, Cutting, Finishing, Knowledge of Materials, Laying, Communication Skills, Cutting, Finishing, Knowledge of Materials, Laying, Communication Skills, Cutting, Finis...",
      fullDescription: "Communication Skills, Cutting, Finishing, Knowledge of Materials, Laying, Communication Skills, Cutting, Finishing, Knowledge of Materials, Laying, Communication Skills, Cutting, Finishing, Knowledge of Materials, Laying, Communication Skills, Cutting, Communication Skills, Cutting, Finishing, Knowledge of Materials, Laying",
      expanded: false
    },
    {
      category: "General > Brickalyer",
      description: "Communication Skills, Cutting, Finishing, Knowledge of Materials, Laying, Communication Skills, Cutting, Communication Skills, Cutting, Finishing, Knowledge of Materials, Laying, Communication Skills, CuttingCommunication Skills, Cutting, Finishing, Knowledge of Materials, Laying, Communication Skills.",
      fullDescription: "Communication Skills, Cutting, Finishing, Knowledge of Materials, Laying, Communication Skills, Cutting, Communication Skills, Cutting, Finishing, Knowledge of Materials, Laying, Communication Skills, CuttingCommunication Skills, Cutting, Finishing, Knowledge of Materials, Laying, Communication Skills.",
      expanded: false
    },
    {
      category: "General > Brickalyer",
      description: "Communication Skills, Cutting, Finishing, Knowledge of Materials, Laying",
      fullDescription: "Communication Skills, Cutting, Finishing, Knowledge of Materials, Laying",
      expanded: false
    },
    {
      category: "General > Brickalyer",
      description: "Communication Skills, Cutting, Finishing, Knowledge of Materials, Laying",
      fullDescription: "Communication Skills, Cutting, Finishing, Knowledge of Materials, Laying",
      expanded: false
    }
  ]);

  const toggleExpand = (index) => {
    setSkills(skills.map((skill, i) => {
      if (i === index) {
        const isExpanding = !skill.expanded;
        return {
          ...skill,
          expanded: isExpanding,
          description: isExpanding 
            ? skill.fullDescription 
            : skill.fullDescription.substring(0, 150) + '...'
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
