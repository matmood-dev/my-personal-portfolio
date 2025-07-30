import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      className="navbar bg-base-100 shadow"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">MyPortfolio</a>
      </div>

      <div className="flex-none gap-2">
        <ul className="menu menu-horizontal px-1">
          <li>
            <motion.a href="/" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Home
            </motion.a>
          </li>
          <li>
            <motion.a href="/about" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              About
            </motion.a>
          </li>
          <li>
            <motion.a href="/projects" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Projects
            </motion.a>
          </li>
          <li>
            <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Contact
            </motion.a>
          </li>
        </ul>
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
    </motion.div>
  );
};

export default Navbar;
