import Link from "next/link";

const NavItem = ({ href, children, className }) => {
  return (
    <li className={`${className} font-circular-std`}>
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default NavItem;
