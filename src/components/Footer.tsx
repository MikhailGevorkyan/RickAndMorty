import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component={"footer"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "3.7rem",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 15px",
        marginTop: "2rem",
      }}
    >
      <Typography fontWeight={700} fontSize={"1rem"} fontFamily={"Karla"}>
        Make with ❤️ for the MobProgramming team
      </Typography>
    </Box>
  );
};

export default Footer;
