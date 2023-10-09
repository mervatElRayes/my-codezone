import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ColorModeContext } from "../theme";
import { IconButton, useTheme } from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import i18n from "../i18n";
import LocaleContext from "./LocaleContext"
import { Suspense } from "react";




function Loading() {
  return <>Loading...</>;
}

function Navbar() {
  const [locale, setLocale] = useState(i18n.language);
  i18n.on("languageChanged", (lng) => setLocale(i18n.language));

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value); // fr oR ar Or EN
  };
  const { t } = useTranslation();
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        <LocaleContext.Provider value={{ locale, setLocale }}>
          <Link className="navbar-brand" to="/">
            {t("Logo")}
          </Link>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button> */}
            <Suspense fallback={<Loading />}>
          <div className="languge">
            
            <select value={locale} onChange={handleChange}>
              <option value="en">English</option>
              <option value="ar">Arabic</option>
              <option value="fr">French</option>
            </select>
          </div>
          </Suspense>
        </LocaleContext.Provider>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto  mb-lg-0">
            <div className="ms-5">
              {theme.palette.mode === "light" ? (
                <IconButton
                  onClick={() => {
                    localStorage.setItem(
                      "mode",
                      theme.palette.mode === "dark" ? "light" : "dark"
                    );
                    colorMode.toggleColorMode();
                  }}
                  color="inherit"
                >
                  <WbSunnyOutlinedIcon className="sun" />
                </IconButton>
              ) : (
                <IconButton
                  onClick={() => {
                    localStorage.setItem(
                      "mode",
                      theme.palette.mode === "dark" ? "light" : "dark"
                    );
                    colorMode.toggleColorMode();
                  }}
                  color="inherit"
                >
                  <DarkModeOutlinedIcon className="moon" />
                </IconButton>
              )}
            </div>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                {t("Home")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {t("About")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
