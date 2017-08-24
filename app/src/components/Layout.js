import React from 'react';
import Menu from './Menu';

const data = {
    categories: ['Artists','Albums','Playlists']
};

class Layout extends React.Component {
    constructor() {
        super()
        this.state = {
            title: "Artists"
        };
    }

    changePage(title) {
        this.setState({title});
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <Menu 
                    title={this.state.title}
                    categories={data.categories} 
                    changePage={this.changePage.bind(this)} />
            </div>
        );
    }

}

export default Layout;
