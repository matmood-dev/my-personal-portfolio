import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.setAttribute("dir", newLang === "ar" ? "rtl" : "ltr");
  };

  return (
    <button className="btn btn-ghost" onClick={toggleLanguage}>
      {i18n.language === "ar" ? "🇺🇸 EN" : "🇸🇦 AR"}
    </button>
  );
};

export default LanguageSwitcher;
