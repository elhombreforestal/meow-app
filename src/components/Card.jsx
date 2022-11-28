import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Favorite } from "../icons";

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleFavClick = () => {
    //
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        width="100%"
        component="img"
        image="/public/cat.jpg"
        alt="Felis Domestica"
      />
      <CardContent>
        <Typography variant="body2">
          This impressive paella is a perfect party dish
        </Typography>
      </CardContent>
    </Card>
  );
}
