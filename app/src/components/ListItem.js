import React from 'react';

class ListItem extends React.Component {

    constructor() {
        super();
        this.updateTitle = this.updateTitle.bind(this);
    }

    updateTitle() {
        this.props.changePage(this.props.item);
    }
    render() {
        return (
            <li onClick={this.updateTitle}>{this.props.item}</li>
        );
    }
};


export default ListItem;
