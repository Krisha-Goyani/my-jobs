import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="relative xs:h-28 md:h-72 md:mt-5">
      <div className="h-[81px]">

      <Image
        src="/image/hero.png" 
        alt="Background"
        width={1310} // Set the width
        height={81} // Set the height
        className="rounded-lg md:rounded-3xl object-cover h-[81px] md:h-[216px]" // Adjusted height classes
      />
      </div>
      {/* Profile Image */}
      <div className="absolute xs:h-16 xs:w-16 md:h-32 md:w-32 md:top-[155px] xs:top-[49px] left-[28px] md:left-[30px] "> {/* Adjust position as needed */}
        <Image
          src="/image/profile-img.PNG" // Replace with the actual path to your profile image
          alt="Profile"
          width={130} // Set the width of the profile image
          height={130} // Set the height of the profile image
          className="rounded-full md:h-32 md:w-32 h-16 w-16" // Optional: styling for the profile image
        />
      </div>
    </div>
  );
};

export default HeroImage;