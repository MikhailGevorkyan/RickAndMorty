import { CardMedia, Grid, Typography } from "@mui/material";
import type { FC } from "react";
import { Link } from "react-router-dom";
import type { Character } from "../interfaces/projectInterfaces";

interface CharacterCardProps {
  data: Character;
}

const CharacterCard: FC<CharacterCardProps> = ({ data }) => {
  return (
    <Grid
      item
      border={"1px solid rgba(0, 0, 0, 0.14)"}
      lg={2.5}
      sx={{
        borderRadius: 2,
        width: { xs: "19.5rem", sm: "15rem" },
      }}
    >
      <Link
        to={`/character/${data.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <CardMedia
          component={"img"}
          src={data.image}
          draggable="false"
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
          {data.name}
        </Typography>
        <Typography
          paragraph
          fontSize={"0.875rem"}
          color={"rgba(0, 0, 0, 0.6)"}
          textAlign={"left"}
          marginLeft={2}
        >
          {data.species}
        </Typography>
      </Link>
    </Grid>
  );
};

export default CharacterCard;
