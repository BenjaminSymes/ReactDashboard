import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Drawer, Divider, Toolbar } from "@material-ui/core";
import SidebarButton from "./sidebarButton";
/**
 * The sidebar should focus on high-level in-app navigation and controls, such as
 * switching dashboards. It should have controls, either per button or global,
 * to hide or add buttons that open dashboards, among other things.
 *
 * This might potentially be the place for controls to load data sets or set up queries.
 */
const drawerWidth = 240;
const useStyles = makeStyles({
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    drawerContainer: {
        overflow: "auto"
    }
});

const Sidebar = () => {
    const classes = useStyles();
    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{
                paper: classes.drawerPaper
            }}
        >
            <Toolbar />
            <Button>Menu</Button>
            <Divider />
            <SidebarButton />
            <Divider />
            <SidebarButton />
            <Divider />
            <SidebarButton />
            <Divider />
        </Drawer>
    );
};

export default Sidebar;
