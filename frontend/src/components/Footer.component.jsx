import React, { useContext } from "react";
import { ThemeContext } from "../contexts/theme";

const Footer = ({ lat, long }) => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

  if (!lat && !long) {
    return <></>;
  }
  return (
    <footer
      id="sticky-footer"
      className={`flex-shrink-0 py-4 ${
        isDark ? "bg-dark" : "bg-light"
      } text-white-50`}
    >
      <div class="container text-center">
        <small style={{ color: theme.color }}>
          Latitude: {lat} & Longitude: {long}
        </small>
      </div>
    </footer>
  );
};

export default Footer;
