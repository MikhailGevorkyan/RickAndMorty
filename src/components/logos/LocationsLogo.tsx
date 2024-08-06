import { CardMedia } from "@mui/material";

const LocationsLogo = () => (
  <CardMedia
    component={"img"}
    src={"images/locations_logo.png"}
    sx={{
      width: { xs: 250, md: 326 },
      margin: "2rem auto 0",
    }}
  />
);

export default LocationsLogo;
