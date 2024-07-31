import { CardMedia, Grid, Typography } from "@mui/material";
import type { FC } from "react";

interface CharacterCardProps {
  id: number;
  image: string;
  name: string;
  species: string;
}

const CharacterCard: FC<CharacterCardProps> = ({
  id,
  image,
  name,
  species,
}) => (
  <Grid
    item
    key={id}
    border={"1px solid rgba(0, 0, 0, 0.14)"}
    xs={2.5}
    sx={{
      borderRadius: 2,
      width: "240px !important",
    }}
  >
    <CardMedia
      component={"img"}
      src={image}
      sx={{
        height: 180,
      }}
    />
    <Typography
      variant="h6"
      fontSize={"1.25rem"}
      fontWeight={500}
      textAlign={"left"}
      marginLeft={2}
    >
      {name}
    </Typography>
    <Typography
      paragraph
      fontSize={"0.875rem"}
      color={"rgba(0, 0, 0, 0.6)"}
      textAlign={"left"}
      marginLeft={2}
    >
      {species}
    </Typography>
  </Grid>
);

export default CharacterCard;
