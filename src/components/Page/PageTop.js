import {
  Box,
  Button,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React, { forwardRef } from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    paddingLeft: 0,
    paddingRight: 0,
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.primary.main,
  },
}));

const PageTop = forwardRef(({ title = "", ...rest }, ref) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box
        border={1}
        borderTop={0}
        borderLeft={0}
        borderRight={0}
        borderColor="#343a40"
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper className={classes.paper} elevation={0}>
              <Typography align="left" color="textPrimary" variant="h1">
                {title}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper} elevation={0}>
              <Typography align="right" color="textSecondary" variant="h6">
                <Toolbar>
                  <Button color="inherit">Login</Button>
                </Toolbar>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
});

PageTop.propTypes = {
  title: PropTypes.string,
};

export default PageTop;
