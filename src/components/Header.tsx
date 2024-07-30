import styles from "./Header.module.css";
import nav_logo from "../assets/logo-black.png";
import { Link, Stack, CardMedia } from "@mui/material";

const Header = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <CardMedia
          component={"img"}
          src={nav_logo}
          sx={{ height: 40, width: 40 }}
        />
        <Stack spacing={1} direction="row" justifyContent="center">
          <Link
            component={"button"}
            underline="hover"
            color={"black"}
            fontFamily={"Karla"}
            fontWeight={700}
            fontSize={"1.125rem"}
          >
            Characters
          </Link>
          <Link
            component={"button"}
            underline="hover"
            color={"black"}
            fontFamily={"Karla"}
            fontWeight={700}
            fontSize={"1.125rem"}
          >
            Locations
          </Link>
          <Link
            component={"button"}
            underline="hover"
            color={"black"}
            fontFamily={"Karla"}
            fontWeight={700}
            fontSize={"1.125rem"}
          >
            Episodes
          </Link>
        </Stack>
      </nav>
    </header>
  );
};

export default Header;
