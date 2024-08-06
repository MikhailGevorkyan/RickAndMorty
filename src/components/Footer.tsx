import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        position: "fixed",
        bottom: 0,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: "3.7rem",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 15px",
        backgroundColor: "white",
        flexGrow: 1,
      }}
    >
      <Typography fontWeight={700} fontFamily={"Karla"} textAlign={"center"}>
        Make with ❤️ for the MobProgramming team
      </Typography>
    </Box>
  );
};

export default Footer;
