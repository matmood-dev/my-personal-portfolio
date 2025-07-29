import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">MyPortfolio</a>
      </div>
      <div className="flex-none gap-2">
        <ul className="menu menu-horizontal px-1">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
