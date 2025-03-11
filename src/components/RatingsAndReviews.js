import React, { useState } from "react";
import { useData } from "../context/DataContext";
import StyledHeading from "./StyledHeading";
import Image from "next/image";

const RatingsAndReviews = () => {
  const { reviews } = useData();
  const [expandedReviews, setExpandedReviews] = useState({});
  const [isExpanded, setIsExpanded] = useState(false);

  // Show first 5 reviews if not expanded
  const visibleReviews = isExpanded
    ? reviews.reviews
    : reviews.reviews.slice(0, 5);

  const toggleReviewExpansion = (id) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const getRatingColor = (rating) => {
    switch (rating) {
      case 5:
      case 4:
      case 3:
        return "bg-bg-green"; // Yellow color for 3 stars
      case 2:
        return "bg-bg-orange";
      case 1:
        return "bg-bg-red"; // Red color for 1-2 stars
      default:
        return "bg-gray-400";
    }
  };

  const getStarColor = (stars) => {
    switch (stars) {
      case 5:
      case 4:
      case 3:
        return "text-bg-green";
      case 2:
        return "text-bg-orange";
      case 1:
        return "text-bg-red";
      default:
        return "text-gray-400";
    }
  };

  return (
    <div className="mt-8 font-circular-std">
      <StyledHeading>Ratings & Reviews</StyledHeading>
      <div className="mt-4">
        <div className="flex md:gap-7 max-h-[100px] xs:max-w-[678px] md:max-w-[419px] w-full h-full">
          <div className="flex flex-col w-28 self-center">
            <div className="flex items-center">
              <span className="text-xl md:text-3xl font-medium">4.0</span>
              <span className="text-2xl ml-1">
                <Image
                  src={"/image/star.png"}
                  alt="star"
                  className="w-5 h-5"
                  width={20}
                  height={20}
                />
              </span>
            </div>
            <div className="text-sm text-gray-500">
              {reviews.summary.totalRatings.toLocaleString()} Ratings &<br />
              {reviews.summary.totalReviews.toLocaleString()} Reviews
            </div>
          </div>
          <div className="border-l border-boder-gray"></div>
          <div className="w-64 flex flex-col gap-2">
            {reviews.summary.distribution.map((item) => (
              <div key={item.stars} className="flex items-center gap-2 h-4">
                <div
                  className={`flex items-center gap-1 w-8 text-sm ${getStarColor(
                    item.stars
                  )}`}
                >
                  <span>{item.stars}</span>
                  <span>★</span>
                </div>
                <div className="w-[137px] md:w-[177px] h-1.5 bg-gray-200 rounded-full overflow-hidden relative">
                  <div
                    className={`h-full ${getRatingColor(
                      item.stars
                    )} absolute left-0 top-0`}
                    style={{
                      width: `${
                        item.stars === 5
                          ? "107px"
                          : item.stars === 4
                          ? "77px"
                          : item.stars === 3
                          ? "57px"
                          : item.stars === 2
                          ? "38px"
                          : "17px"
                      }`,
                    }}
                  />
                </div>
                <span className="w-12 text-sm text-gray-600">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          {visibleReviews.map((review) => (
            <div
              key={review.id}
              className={`
                ${reviews.reviews.indexOf(review) !== 0 ? "pt-5" : ""} 
                ${
                  reviews.reviews.indexOf(review) !== reviews.reviews.length - 1
                    ? "border-b border-boder-gray"
                    : ""
                } 
                pb-4
              `}
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`flex items-center gap-[2px] px-2 py-0.5 text-white text-sm rounded ${getRatingColor(
                    review.rating
                  )}`}
                >
                  <span>{review.rating}</span>
                  <span>★</span>
                </span>
                <span className="font-bold text-lg">{review.category}</span>
              </div>
              <p className="mt-2 text-base font-normal mb-3">
                {expandedReviews[review.id]
                  ? review.text
                  : review.text.length > 150
                  ? `${review.text.slice(0, 150)}...`
                  : review.text}

                {review.text.length > 150 && (
                  <button
                    onClick={() => toggleReviewExpansion(review.id)}
                    className="text-text-red font-circular-std text-sm mt-1 ml-1"
                  >
                    {expandedReviews[review.id] ? "See less" : "See more"}
                  </button>
                )}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-gray">
                  {review.author}, {review.date}
                </span>
                <div className="flex items-center gap-4">
                  <button className="text-gray-400 flex items-center gap-1">
                    <span>
                      <Image
                        src={"/image/like.png"}
                        alt="like"
                        width={20}
                        height={20}
                      />
                    </span>
                    <span className="text-base text-text-gray-light font-normal">
                      0
                    </span>
                  </button>
                  <button className="text-gray-400 flex items-center gap-1">
                    <span>
                      <Image
                        src={"/image/dislike.png"}
                        alt="like"
                        width={20}
                        height={20}
                      />
                    </span>
                    <span className="text-base text-text-gray-light font-normal">
                      0
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more/less button - Show only if there are more than 5 reviews */}
        {reviews.reviews.length > 5 && (
          <button
            onClick={toggleExpand}
            className="mt-10 md:mb-20 mb-10 px-6 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-50 transition-colors"
          >
            {isExpanded ? "View less" : "View more"}
          </button>
        )}
      </div>
    </div>
  );
};

export default RatingsAndReviews;
