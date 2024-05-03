import { Box } from "@mui/material";

function FilterElement({ children }: { children: React.ReactNode }) {
  return (
    <Box
      boxShadow={1}
      borderRadius={2}
      height="100%"
    >
      {children}
    </Box>
  );
}

export default FilterElement;
