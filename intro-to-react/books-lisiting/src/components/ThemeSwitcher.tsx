import { ModeNight, WbSunny } from "@mui/icons-material";
import { Box, Switch, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useTheme } from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = (e: any) => {
    setTheme(e.target.value);
  };

  return (
    <Box>
      <ToggleButtonGroup onClick={handleChange}>
        <ToggleButton value={"dark"}>
          <WbSunny onClick={handleChange} />
        </ToggleButton>
        <ToggleButton value={"light"}>
          <ModeNight onClick={handleChange} />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default ThemeSwitcher;
