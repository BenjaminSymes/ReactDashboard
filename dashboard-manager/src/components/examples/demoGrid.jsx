import React, { Component } from "react";
import GridLayout from 'react-grid-layout';
import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";
class DemoGrid extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      {i: 'a', x: 0, y: 0, w: 9, h: 4},
      {i: 'b', x: 1, y: 0, w: 3, h: 4, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 0, w: 12, h: 4}
    ];
    return (
      <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
        <div key="a"><Chart /></div>
        <div key="b"><Deposits /></div>
        <div key="c"><Orders /></div>
      </GridLayout>
    )
  }
}

export default DemoGrid;