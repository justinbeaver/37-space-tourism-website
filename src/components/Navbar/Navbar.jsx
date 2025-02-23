import NavItem from "@/components/NavItem/NavItem";
import Logo from "@/assets/shared/logo.svg?react";
import content from "./Navbar.content.json";

import s from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <header className={s.header}>
      <Logo className={s.logo} />
      <div className={s.decorationLine}></div>
      <nav className={s.nav}>
        <ul className={s.list}>
          {content.nav.map(({ label, href }, index) => (
            <li key={index} className={s.listItem}>
              <NavItem href={href} isActive={index === 0}>
                <span>{String(index).padStart(2, "0")}</span>
                {label}
              </NavItem>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
