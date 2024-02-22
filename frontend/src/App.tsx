import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Button className="m-10 p-4">Click This</Button>
      </ThemeProvider>
    </>
  );
}

export default App;
