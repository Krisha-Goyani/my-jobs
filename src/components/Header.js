import Link from "next/link";
import Image from "next/image";
import NavItem from "./NavItem"; // Import the NavItem component
import { useNavItems } from "../context/NavContext"; // Import the useNavItems hook

const Header = () => {
  const { navItems } = useNavItems(); // Get navigation items from context

  return (
    <header className="fixed top-0 left-0 right-0 z-[999] bg-white shadow">
      <div className="container mx-auto md:h-36 flex flex-col justify-between items-center">
        <div className="flex xs:px-4 md:px-16 xs:py-5 md:pt-7 justify-between items-center w-full">
          <span className="font-circular-std pt-3 text-sm md:flex items-center gap-2 xs:hidden md:block">
            English{" "}
            <Image
              src="/image/arrow-down.png"
              alt="down-arrow"
              title="down-arrow"
              className="w-3 h-3"
              width={12}
              height={12}
            />
          </span>
          <div>
            <Image
              src="/image/logo.png"
              alt="Flex Crew Logo"
              title="Flex Crew"
              className="h-9 w-40 md:h-12 md:w-56"
              width={226}
              height={4}
            />
          </div>
          <div className="pt-3 md:flex gap-11 xs:hidden md:block">
            <Image
              className="w-6 h-6"
              src="/image/notification.png"
              title="Notifications"
              alt="Notification bell icon"
              width={24}
              height={24}
            />
            <div className="flex items-center gap-1">
              <Image
                className="w-6 h-6"
                src="/image/profile.png"
                title="User Profile"
                alt="Profile avatar"
                width={24}
                height={24}
              />
              <span className="font-circular-std text-sm">Rone Bennett</span>
            </div>
          </div>
          <div className="sm:block md:hidden">
            <Image
              className="w-6 h-6"
              src="/image/menu.png"
              alt="Menu icon"
              title="Navigation menu"
              width={24}
              height={24}
            />
          </div>
        </div>
        <nav className="hidden md:block">
          <ul className="flex mt-3 mb-6 py-1 text-[clamp(12px,1.2vw,16px)] w-[clamp(700px,80vw,802px)] h-[36px] justify-between items-center font-circular-std">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                href={item.href}
                className={
                  item.label === "Post a Job"
                    ? "bg-[var(--redtertiary)] text-[var(--redprimary)] rounded-full border-[var(--border)]  px-4 py-2"
                    : ""
                }
              >
                {item.label}
              </NavItem>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
