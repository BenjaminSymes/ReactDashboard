import React, { Component } from "react";
import SidebarButton from "./sidebarButton";
import { Typography } from "@material-ui/core";

/**
 * A section of the sidebar organizes sidebar buttons. Could allow
 * users to add/remove bundles of functionality, as well as just simple
 * visual organization.
 */
class SidebarSection extends Component {
    state = {};
    render() {
        return (
            <div id="sidebar-controls">
                <Typography variant="h5">Dashboards</Typography>
                <SidebarButton />
                <SidebarButton />
            </div>
        );
    }
}

export default SidebarSection;
