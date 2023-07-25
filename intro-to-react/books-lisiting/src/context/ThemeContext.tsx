import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type ThemeContextType = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
} | null;
const ThemeContext = createContext<ThemeContextType>(null);

const useTheme = () => useContext(ThemeContext);

const ThemeProvider: any = ({ children }: any) => {
  const [theme, setTheme] = useState<string>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { useTheme, ThemeProvider };
