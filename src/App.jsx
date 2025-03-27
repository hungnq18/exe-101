import { ThemeProvider } from "@mui/material";
import LandingPage from "./LandingPage";
import theme from "./mui-config/theme.config.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
