import { Grid, Paper, styled, Typography } from "@mui/material";
import { FC } from "react";

interface EpisodeCardProps {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

const DemoPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: 240,
  height: 128,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
  background: "rgba(250, 250, 250, 1)",
  gap: 5,
}));

const EpisodeCard: FC<EpisodeCardProps> = ({ id, name, air_date, episode }) => (
  <Grid item key={id} border={"1px solid rgba(0, 0, 0, 0.14)"} lg={2.5}>
    <DemoPaper>
      <Typography fontWeight={500} fontSize={"1.25rem"}>
        {name}
      </Typography>
      <Typography fontSize={"0.875rem"} color={"rgba(0, 0, 0, 0.6)"}>
        {air_date}
      </Typography>
      <Typography
        color={"rgba(0, 0, 0, 0.6)"}
        fontWeight={700}
        fontSize={"0.875rem"}
      >
        {episode}
      </Typography>
    </DemoPaper>
  </Grid>
);

export default EpisodeCard;
