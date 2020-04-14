import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 2 },
            { id: 3, value: 0 },
            { id: 4, value: 5 }
        ]
    };

    handleDelete = counterId => {
        this.setState({
            counters: this.state.counters.filter(c => c.id !== counterId)
        });
    };

    render() {
        return (
            <div>
                {this.state.counters.map(counter => (
                    <Counter
                        id={counter.id}
                        key={counter.id}
                        value={counter.value}
                        onDelete={this.handleDelete}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;
