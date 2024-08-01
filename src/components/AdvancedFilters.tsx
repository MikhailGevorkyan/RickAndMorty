import { Box, Button } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

const AdvancedFilters = () => {
  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
        marginTop: 2,
        justifyContent: "center",
      }}
    >
      <Button
        sx={{
          width: "19.5rem",
          height: "3.5rem",
          backgroundColor: "rgba(227, 242, 253, 1)",
          color: "rgba(33, 150, 243, 1)",
        }}
        variant="contained"
        startIcon={<FilterListIcon />}
      >
        Advanced Filters
      </Button>
    </Box>
  );
};

export default AdvancedFilters;
