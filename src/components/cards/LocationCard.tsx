import { Grid, Paper, styled, Typography } from "@mui/material";
import { FC } from "react";
import type { Location } from "../interfaces/projectInterfaces";
import { Link } from "react-router-dom";

interface LocationCardProps {
  data: Location;
}

const DemoPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: 250,
  height: 128,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
  background: "rgba(250, 250, 250, 1)",
}));

const LocationCard: FC<LocationCardProps> = ({ data }) => (
  <Grid item border={"1px solid rgba(0, 0, 0, 0.14)"} lg={2.5}>
    <Link
      to={`/location/${data.id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <DemoPaper>
        <Typography fontWeight={500} fontSize={"1.25rem"}>
          {data.name}
        </Typography>
        <Typography fontSize={"0.875rem"} color={"rgba(0, 0, 0, 0.6)"}>
          {data.type}
        </Typography>
      </DemoPaper>
    </Link>
  </Grid>
);

export default LocationCard;
