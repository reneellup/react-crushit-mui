import { Typography, makeStyles } from "@material-ui/core";

import Page from "../components/Page";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    minHeight: "100%",
  },
}));

const Blank = () => {
  const classes = useStyles();
  return (
    <Page className={classes.root} title="Web Analytics">
      <Typography align="left" color="textPrimary" variant="h1">
        h1. Heading
      </Typography>
      <Typography align="left" color="textSecondary" variant="h2">
        h2. Heading
      </Typography>
      <Typography align="left" color="textPrimary" variant="h3">
        h3. Heading
      </Typography>
      <Typography align="left" color="textSecondary" variant="h4">
        h4. Heading
      </Typography>
      <Typography align="left" color="textSecondary" variant="h5">
        h5. Heading
      </Typography>
      <Typography align="left" color="textPrimary" variant="h6">
        h6. Heading
      </Typography>
    </Page>
  );
};

export default Blank;
