import Link from "next/link";

const NavItem = ({ href, children, className }) => {
  return (
    <li className={`${className}`}>
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default NavItem;
