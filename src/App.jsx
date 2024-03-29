import Typo from "./components/Typo";
import { createTheme, ThemeProvider } from "@mui/material";
import { deepOrange, deepPurple, lime } from "@mui/material/colors";
import TextFieldComp from "./components/TextFieldComp";
import CardComp from "./components/CardComp";
import AppbarComp from "./components/AppbarComp";

function App() {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#bede",
            },
            secondary: {
                main: deepPurple[500],
            },
            error: {
                main: lime["A400"],
            },
            koyuMor: {
                main: deepPurple[500],
                light: deepPurple[300],
                dark: deepPurple[800],
                contrastText: "white",
            },
        },
    });
    return (
        <>
            <ThemeProvider theme={theme}>
                <AppbarComp/>
                <Typo />
                <TextFieldComp />
                <CardComp/>
            </ThemeProvider>
        </>
    );
}

export default App;
