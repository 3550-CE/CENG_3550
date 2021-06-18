import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: 16,
    width: 250,
    height: 250,
    fontSize: 24,
    fontWeight: 400,
  },
}));

export default function CoinFlipButton({ onClick, title, value }) {
  const classes = useStyles();

  return (
    <Button variant="outlined" onClick={onClick} className={classes.button}>
      {title}
    </Button>
  );
}
