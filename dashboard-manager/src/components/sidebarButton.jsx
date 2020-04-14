import React, { Component } from "react";
import Button from "@material-ui/core/Button";

/**
 * Buttons/links that appear in the sidebar. Ideally
 * the sidebar will be able to group these together, but
 * they at least need to be dynamic so users can add or remove
 * dashboards from their sidebar for quick access.
 */
class SidebarButton extends Component {
    state = {};
    render() {
        return <Button color="primary">Dashboard 1</Button>;
    }
}

export default SidebarButton;
