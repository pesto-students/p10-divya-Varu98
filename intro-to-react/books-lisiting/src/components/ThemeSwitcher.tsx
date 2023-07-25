import { ModeNight, WbSunny } from "@mui/icons-material";
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useTheme } from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { setTheme } = useTheme();

  const handleChange = (e: any) => {
    setTheme(e.target.value);
  };

  return (
    <Box>
      <ToggleButtonGroup onChange={handleChange}>
        <ToggleButton value={"light"}>
          <WbSunny />
        </ToggleButton>
        <ToggleButton value={"dark"}>
          <ModeNight />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default ThemeSwitcher;
