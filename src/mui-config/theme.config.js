import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#E9B7F0",
        },
        secondary: {
            main: "#F0B7B7",
        },
        buttonPrimary: {
            main: "#1A1A1A",   // Đen nhẹ
            hover: "#333333",  // Khi hover (sáng hơn)
            active: "#0F0F0F", // Khi nhấn (đậm hơn nhưng không quá tối)
        },
    }
})

export default theme;