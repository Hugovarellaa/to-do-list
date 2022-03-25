import "react-calendar-heatmap/dist/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Profile } from "./pages/Profile";
import { Repo } from "./pages/Repo";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { ThemeName, themes } from "./styles/themes";
import { useState } from "react";

export function App() {
  const [themeName, setThemeName] = useState<ThemeName>("light");
  const currentTheme = themes[themeName];

  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <Header themeName={themeName} setThemeName={setThemeName} />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="/:username/:reponame" element={<Repo />} />
        </Routes>
        <Footer />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}
