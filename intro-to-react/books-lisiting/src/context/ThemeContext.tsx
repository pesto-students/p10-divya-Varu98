import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export type ThemeContextType = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};
const ThemeContext = createContext<ThemeContextType>({
  setTheme: () => {},
  theme: "",
});

const useTheme = () => useContext(ThemeContext);

// Implement a custom hook for handling book sorting:

// Create a custom hook called useBookSorter that takes the books state as input and returns a sorted book list based on a given sorting criteria.
// Implement the book sorting logic within the custom hook using the useMemo hook to memoize the sorted list and optimize performance.

const ThemeProvider: any = ({ children, _theme_ }: any) => {
  const [theme, setTheme] = useState<string>(_theme_);
  console.log(theme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { useTheme, ThemeProvider };
