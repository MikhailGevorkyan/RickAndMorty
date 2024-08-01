import {
  Stack,
  CardMedia,
  AppBar,
  Toolbar,
  Box,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Dispatch, SetStateAction } from "react";

interface HeaderProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ setOpen, open }) => {
  console.log(open);
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
          <Box
            sx={{
              display: { sm: "block", xs: "none" },
            }}
          >
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
          </Box>
          <Box
            sx={{
              display: { xs: "block", sm: "none" },
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="default"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setOpen(!open)}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
