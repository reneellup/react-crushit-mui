import Page from "../components/page";
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  productCard: {
    height: "100%",
  },
}));

const Blank = () => {
  const classes = useStyles();
  return (
    <Page className={classes.root} title="Blank Page">
      <div>Blank Page</div>
    </Page>
  );
};

export default Blank;
