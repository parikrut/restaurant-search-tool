import "./App.css";
import Header from "./components/Header.component";
import Restaurant from "./pages/Restaurant.page";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search.component";
import React, { useContext } from "react";
import { ThemeContext } from "./contexts/theme";

function App() {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

  return (
    <div className="App" style={{ backgroundColor: theme.backgroundColor }}>
      <Header />
      <hr style={{ color: theme.color }}></hr>
      <Restaurant />
    </div>
  );
}

export default App;
