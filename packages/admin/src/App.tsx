import "./App.css";
import { ModeToggle } from "./components/theme/mode-toggle";
import { ThemeProvider } from "./components/theme/provider";

function App() {
  return (
    <ThemeProvider>
      <ModeToggle />
    </ThemeProvider>
  );
}

export default App;
