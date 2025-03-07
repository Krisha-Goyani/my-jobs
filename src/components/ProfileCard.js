// components/ProfileCard.js
const ProfileCard = ({ name, rating, reviews, experience, location, about }) => {
    return (
      <div className="p-4 border rounded-lg shadow-md">
        <h2 className="text-xl font-bold">{name}</h2>
        <p>{rating} ⭐ • {reviews} Reviews • {experience} of experience</p>
        <p>{location}</p>
        <p>{about}</p>
      </div>
    );
  };
  
  export default ProfileCard;