import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="text-center">
      <h1 className="text-4xl font-bold">{t("welcome")}</h1>
      <p className="mt-4 text-lg text-gray-500">{t("description")}</p>
    </section>
  );
};

export default Home;