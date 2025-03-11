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
    <div className="mt-10">
      <StyledHeading>Past Works</StyledHeading>
      <div className="mt-4 relative">
        {/* Red timeline line - Extended to reach the View more button */}
        <div className="absolute left-[5px] top-2 bottom-[14px] w-[2px] bg-text-red" />
        
        {visibleWorks.map((work) => (
          <div key={work.id} className="pb-7 relative font-circular-std">
            <div className="flex items-center gap-2">
              {/* Red dot with white border */}
              <div className="w-3 h-3 rounded-full bg-text-red ring-2 ring-white relative z-10" />
              <h3 className="font-medium">{work.title}</h3>
            </div>
            <p className="text-text-gray font-normal text-sm ml-5">{work.name}, {work.date}</p>
            <p className="my-5 ml-5 font-normal text-text-black-primary">{work.description}</p>
            <div className="flex gap-2 mt-3 ml-5">
              {work.images.map((image, index) => (
                <div key={index} className="w-[104px] h-[104px] rounded-xl overflow-hidden relative">
                  <Image
                    src={image.src}
                    alt=""
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
            <div className="w-3 h-3 rounded-full bg-text-red ring-2 ring-white relative z-10" />
            <button 
              onClick={toggleExpand}
              className="text-text-red hover:text-red-700 font-medium transition-colors"
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