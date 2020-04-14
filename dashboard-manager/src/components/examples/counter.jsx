import React, { Component } from "react";

class Counter extends Component {
    tagStyle = {
        fontSize: "20px"
    };

    constructor(props) {
        super(props);
        this.state = {
            count: this.props.value,
            imageUrl: "https://picsum.photos/200",
            widgets: ["widget1", "widget2"]
        };
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    };

    mapWidgets() {
        var widgetContent = (
            <ul>
                {this.state.widgets.map(widgetName => (
                    <li key={widgetName}>{widgetName}</li>
                ))}
            </ul>
        );
        return widgetContent;
    }

    formatCount() {
        const count = this.state.count;
        if (count === 0) {
            return "zero";
        } else {
            return count;
        }
    }

    render() {
        return (
            <div>
                <img src={this.state.imageUrl} alt="" />
                <h1 style={this.tagStyle} className="badge badge-primary m-3">
                    {this.props.id} : {this.formatCount()}
                </h1>
                <button onClick={() => this.handleIncrement()}>++</button>
                <button
                    className="badge badge-warning m-3"
                    onClick={() => {
                        this.props.onDelete(this.props.id);
                    }}
                >
                    Remove
                </button>
            </div>
        );
    }
}

export default Counter;
