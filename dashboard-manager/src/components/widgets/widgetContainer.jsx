import React, { Component } from "react";
import Widget from "./widget";
import {
    Typography,
    Button,
    Box,
    Container,
    Paper,
    Toolbar
} from "@material-ui/core";

/**
 * The widget container should encapsulate all features that
 * are required by every widget, such as drag/drop, edit, etc.
 * There will be multiple widget containers active on a single
 * dashboard.
 */
class WidgetContainer extends Component {
    state = {};
    render() {
        return (
            <Paper>
                <Toolbar>
                <Typography variant="h5">{this.props.name}{this.props.age}</Typography>
                </Toolbar>
                <Widget />
            </Paper>
        );
    }
}

export default WidgetContainer;
