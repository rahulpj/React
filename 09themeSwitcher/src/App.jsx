import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/theme";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";

function App() {
  const [themeMode, setThememode] = useState("light");

  const lightTheme = () => {
    setThememode("light");
  };
  const darkTheme = () => {
    setThememode("dark");
  };

  // actual change in theme

  useEffect(() => {
    let ele = document.querySelector("html");
    ele.classList.remove("dark", "light");
    ele.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
