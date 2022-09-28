import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

export interface NavBarLinkProps {
  icon: JSX.Element;
  href: string;
  label: string;
}

function NavBarLink(props: NavBarLinkProps): JSX.Element {
  const router = useRouter();
  const isActive = router.pathname === props.href;
  const href = router.pathname === props.href ? "#main" : props.href;
  return (
    <li className={classNames(isActive && "text-blue-600")}>
      {isActive && <span className="sr-only">Current page: </span>}
      <Link href={href}>
        <a aria-current={isActive} className="flex flex-col items-center">
          <span className="text-2xl">{props.icon}</span>
          <span>{props.label}</span>
        </a>
      </Link>
    </li>
  );
}

export interface NavBarProps {
  children: React.ReactNode;
}

function _NavBar(props: NavBarProps): JSX.Element {
  return (
    <nav>
      <ul className="flex flex-row justify-around">{props.children}</ul>
    </nav>
  );
}

export const NavBar = Object.assign(_NavBar, { Link: NavBarLink });

export default NavBar;
