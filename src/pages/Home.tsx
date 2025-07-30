import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import avatar from "../assets/avatar.jpg";
import { motion } from "framer-motion";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 mt-12">
      {/* Text section */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-4">{t("home.welcome")}</h1>
        <p className="text-lg text-base-content/70 mb-6">
          {t("home.description")}
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <Link to="/contact" className="btn btn-primary">
            {t("home.contact")}
          </Link>
          <Link to="/projects" download className="btn btn-outline">
            {t("home.projects")}
          </Link>
        </div>
      </motion.div>

      {/* Image section */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img
          src={avatar}
          alt="Mahmood"
          className="rounded-full w-60 h-60 object-cover shadow-lg border-4 border-primary"
        />
      </motion.div>
    </section>
  );
};

export default Home;
