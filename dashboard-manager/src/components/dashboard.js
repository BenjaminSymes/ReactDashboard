import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import WidgetContainer from "./widgets/widgetContainer";
import postData from '../data/List.json'
import { Toolbar } from "@material-ui/core";
import GridLayout from 'react-grid-layout';
/**
 * The dashboard serves as the container for widgets. It should have
 * authority over the grid of widgets and their settings. It can be closed
 * and opened, ie some sort of save file/object saves the contents of the
 * dashboard, and that save can be loaded and unloaded at will, allowing
 * different dashboards.
 */
const useStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}));

const layout = [

];

const Dashboard = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <Toolbar />
            <GridLayout
                className="layout"
                cols={5}
                rowHeight={320}
                width={1400}
            >
                {postData.map((postDetail, index)=>{
			  	return (<div key={index}><WidgetContainer  name={postDetail.country}/></div>)
			  })}
            </GridLayout>
        </main>
    );
};

export default Dashboard;