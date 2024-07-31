import { Stack, CardMedia, AppBar, Toolbar, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box component={"header"}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-around",
            boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 8px",
            backgroundColor: "white",
          }}
        >
          <CardMedia
            component={"img"}
            src={"images/logo_black.png"}
            sx={{ height: 40, width: 40 }}
          />
          <Stack spacing={1} direction="row" justifyContent="center" gap={2}>
            <Link
              to={"/"}
              style={{
                color: "black",
                fontFamily: "Karla",
                fontWeight: 700,
                fontSize: "1.125rem",
                textDecoration: "none",
              }}
            >
              Characters
            </Link>
            <Link
              to={"/locations"}
              style={{
                color: "black",
                fontFamily: "Karla",
                fontWeight: 700,
                fontSize: "1.125rem",
                textDecoration: "none",
              }}
            >
              Locations
            </Link>
            <Link
              to={"/episodes"}
              style={{
                color: "black",
                fontFamily: "Karla",
                fontWeight: 700,
                fontSize: "1.125rem",
                textDecoration: "none",
              }}
            >
              Episodes
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
