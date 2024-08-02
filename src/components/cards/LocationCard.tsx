import { Grid, Paper, styled, Typography } from "@mui/material";
import { FC } from "react";

interface LocationCardProps {
  id: number;
  name: string;
  type: string;
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

const LocationCard: FC<LocationCardProps> = ({ id, name, type }) => (
  <Grid item key={id} border={"1px solid rgba(0, 0, 0, 0.14)"} lg={2.5}>
    <DemoPaper>
      <Typography fontWeight={500} fontSize={"1.25rem"}>
        {name}
      </Typography>
      <Typography fontSize={"0.875rem"} color={"rgba(0, 0, 0, 0.6)"}>
        {type}
      </Typography>
    </DemoPaper>
  </Grid>
);

export default LocationCard;
