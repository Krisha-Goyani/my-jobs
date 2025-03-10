import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import StyledHeading from './StyledHeading';

const RatingsAndReviews = () => {
  const { reviews } = useData();
  const [expandedReviews, setExpandedReviews] = useState({});

  const toggleReviewExpansion = (id) => {
    setExpandedReviews(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getRatingColor = (rating) => {
    switch (rating) {
      case 5:
      case 4:
        return 'bg-[#22C55E]'; // Green color for 4-5 stars
      case 3:
        return 'bg-[#EAB308]'; // Yellow color for 3 stars
      case 2:
      case 1:
        return 'bg-[#EF4444]'; // Red color for 1-2 stars
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="mt-8">
      <StyledHeading>Ratings & Reviews</StyledHeading>
      <div className="mt-4">
        <div className='flex gap-7 max-h-[100px] h-full'> 
          <div className="flex flex-col">
            <div className="flex items-baseline">
              <span className="text-3xl font-medium">{reviews.summary.average}</span>
              <span className="text-yellow-400 text-2xl ml-1">★</span>
            </div>
            <div className="text-sm text-gray-500">
              {reviews.summary.totalRatings.toLocaleString()} Ratings &<br />
              {reviews.summary.totalReviews.toLocaleString()} Reviews
            </div>
          </div>
          
          <div className="w-[254px] space-y-2">
            {reviews.summary.distribution.map((item) => (
              <div key={item.stars} className="flex items-center gap-2 h-4">
                <span className="w-8 text-sm text-gray-600">{item.stars}★</span>
                <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#22C55E]" 
                    style={{ width: `${(item.count / reviews.summary.totalRatings) * 100}%` }}
                  />
                </div>
                <span className="w-12 text-sm text-gray-600">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {reviews.reviews.map((review) => (
            <div key={review.id} className="border-b pb-4">
              <div className="flex items-center gap-2">
                <span className={`px-2 py-0.5 text-white text-sm rounded ${getRatingColor(review.rating)}`}>
                  {review.rating}★
                </span>
                <span className="font-medium">{review.category}</span>
              </div>
              <p className="mt-2 text-sm">
                {expandedReviews[review.id] ? review.text : 
                  review.text.length > 150 ? `${review.text.slice(0, 150)}...` : review.text}
              </p>
              {review.text.length > 150 && (
                <button
                  onClick={() => toggleReviewExpansion(review.id)}
                  className="text-red-500 text-sm mt-1"
                >
                  {expandedReviews[review.id] ? 'See less' : 'See more'}
                </button>
              )}
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-gray-500">{review.author}, {review.date}</span>
                <div className="flex items-center gap-4">
                  <button className="text-gray-400 flex items-center gap-1">
                    <span>👍</span>
                    <span className="text-sm">0</span>
                  </button>
                  <button className="text-gray-400 flex items-center gap-1">
                    <span>👎</span>
                    <span className="text-sm">0</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="mt-4 px-6 py-2 border rounded-full text-sm">View more</button>
      </div>
    </div>
  );
};

export default RatingsAndReviews; 