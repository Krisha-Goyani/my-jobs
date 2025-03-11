import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import StyledHeading from './StyledHeading';
import Image from 'next/image';

const PastWorks = () => {
  const { pastWorks } = useData();
  const [isExpanded, setIsExpanded] = useState(false);

  // Show only first 2 items if not expanded
  const visibleWorks = isExpanded ? pastWorks : pastWorks.slice(0, 2);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mt-5 md:mt-10">
      <StyledHeading>Past Works</StyledHeading>
      <div className="mt-2 md:mt-4 relative">
        {/* Red timeline line - Behind the dots */}
        <div className="absolute left-2.5 top-2 bottom-[14px] w-[2px] bg-text-red" />
        
        {visibleWorks.map((work) => (
          <div key={work.id} className="pb-7 relative font-circular-std">
            <div className="flex items-center gap-2">
              {/* Outer ring with inner dot and white background */}
              <div className="w-5 h-5 rounded-full border-2 border-text-red bg-white relative z-10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-text-red" />
              </div>
              <h3 className="font-medium">{work.title}</h3>
            </div>
            <p className="text-text-gray font-normal text-sm ml-7">{work.name}, {work.date}</p>
            <p className="my-5 ml-7 font-normal text-text-black-primary">{work.description}</p>
            <div className="flex gap-2 mt-3 ml-7">
              {work.images.map((image, index) => (
                <div key={index} className="w-[104px] h-[104px] rounded-xl overflow-hidden relative">
                  <Image
                    src={image.src}
                    alt={`Past work ${index + 1}`}
                    title={`Past work sample ${index + 1}`}
                    fill
                    className={`object-cover ${image.isBlurred ? 'blur-sm' : ''}`}
                    sizes="104px"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        
        {/* View more/less button with red dot */}
        {pastWorks.length > 2 && (
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full border-2 border-text-red bg-white relative z-10 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-text-red" />
            </div>
            <button 
              onClick={toggleExpand}
              className="text-text-red font-circular-std hover:text-red-700 font-medium transition-colors"
            >
              {isExpanded ? 'View less' : 'View more'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PastWorks; 