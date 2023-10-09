import React from "react";
import { useTranslation } from "react-i18next";
function About() {
  const {t} = useTranslation();
  return (
    <>
      <div className="overlay">
        <h3 className="text-center">{t('we can arrive to you any where')}</h3>
      </div>
      <img className="bgImg" src="./img/4.jpg" alt="" />
    </>
  );
}

export default About;
