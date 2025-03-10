import React from 'react';
import { useData } from '../context/DataContext';
import StyledHeading from './StyledHeading';

const PastWorks = () => {
  const { pastWorks } = useData();

  return (
    <div className="mt-10">
      <StyledHeading>Past Works</StyledHeading>
      <div className="mt-4 relative">
        {/* Red timeline line */}
        <div className="absolute left-[5px] top-2 bottom-8 w-[2px] bg-red-500" />
        
        {pastWorks.map((work) => (
          <div key={work.id} className="pb-4 relative">
            <div className="flex items-center gap-2">
              {/* Red dot with white border */}
              <div className="w-3 h-3 rounded-full bg-red-500 ring-2 ring-white relative z-10" />
              <h3 className="font-medium">{work.title}</h3>
            </div>
            <p className="text-gray-600 text-sm mt-1 ml-5">{work.name}, {work.date}</p>
            <p className="mt-2 ml-5">{work.description}</p>
            <div className="flex gap-2 mt-3 ml-5">
              {work.images.map((image, index) => (
                <div key={index} className="w-[104px] h-[104px] rounded-xl overflow-hidden">
                  {image.includes('.mp4') ? (
                    <div className="relative">
                      <img src={image} alt="" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                          <div className="w-0 h-0 border-l-8 border-t-6 border-b-6 border-l-gray-800 border-t-transparent border-b-transparent ml-1" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        
        {/* View more button with red dot */}
        <div className="relative">
          <div className="w-3 h-3 rounded-full bg-red-500 ring-2 ring-white relative z-10" />
          <button className="text-red-500 font-medium ml-5">View more</button>
        </div>
      </div>
    </div>
  );
};

export default PastWorks; 