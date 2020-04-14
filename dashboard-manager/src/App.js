import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navigation from "./components/navigation";
import ButtonAppBar from "./components/newAppBar";
import Sidebar from "./components/sidebar";
import Dashboard from "./components/dashboard";
import CssBaseline from '@material-ui/core/CssBaseline';


const useStyles = makeStyles(theme => ({
    root: {},

    appBar: {
        flexGrow: 1
      }
}));

const App = () => {
    const classes = useStyles();
    return (
        <div>
        <div className = {classes.root}>
        <ButtonAppBar />
        </div>
        <div className={classes.root}>
            <CssBaseline />
        </div>
       </div>
    );
}

export default App;