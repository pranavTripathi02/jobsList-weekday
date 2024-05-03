import { Box } from "@mui/material";
import "./App.css";
import CardGrid from "./components/cardGrid";
import Filters from "./components/filter/filters";

function App() {
  return (
    <Box py={4}>
      <Filters />
      <CardGrid />
    </Box>
  );
}

export default App;
