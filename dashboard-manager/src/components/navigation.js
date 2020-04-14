import React from "react";
import { Typography, AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
/**
 * This is bar across the top of the app, handling any links off-site
 * and app-wide controls, potentially user settings link, etc.
 */
const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  }
}));

const Navigation = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar} position="absolute">
            <Toolbar>
                <Typography variant="h5" color="inherit">
                    Dashboard Manager
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;
