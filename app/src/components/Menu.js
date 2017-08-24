import React from 'react';
import ListItem from './ListItem';

class Menu extends React.Component {

    render() {
        return (
            <ul>
                { this.props.categories.map(category => <ListItem changePage={this.props.changePage} item={category}/>) }
            </ul>
        );
    }
    
}

export default Menu;
