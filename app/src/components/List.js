import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <ul>
                { this.props.categories.map(category => <li>{ category }</li>) }
            </ul>
        );
    }
}

export default List;
