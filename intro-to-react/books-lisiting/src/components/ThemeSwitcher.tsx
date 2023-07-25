import { ModeNight, WbSunny } from "@mui/icons-material";
import { Box, ToggleButton } from "@mui/material";
import { useTheme } from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { setTheme } = useTheme();

  const handleChange = (e: any) => {
    const value = e.target.value;
    setTheme(value);
  };

  return (
    <Box>
      <ToggleButton onChange={handleChange} value={"light"}>
        <WbSunny />
      </ToggleButton>
      <ToggleButton onChange={handleChange} value={"light"}>
        <ModeNight />
      </ToggleButton>
    </Box>
  );
};

export default ThemeSwitcher;
