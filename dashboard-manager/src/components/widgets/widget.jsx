import React, { Component } from "react";
import {
    Typography,
    Button,
    Box,
    Container,
    Paper,
    Toolbar
} from "@material-ui/core";

/**
 * This widget class, in theory, should be replaceable by pretty much
 * anything. We may want to see if it's possible to allow users to add
 * raw html/css/js into widgets somehow, but for now react components
 * will be used. The widget should not have any idea about the dashboard
 * or even its container really.
 */
class Widget extends Component {
    state = {};
    render() {
        return (
            <div>
                <p>
                    Widget Description
                </p>
                <img src="https://picsum.photos/200" alt="" style={{width: 200}}/>
            </div>
        );
    }
}

export default Widget;
