import axios from 'axios';
import React from 'react';

import InputFilter from './InputFilter';
import Menu from './Menu';
import Header from './Header';
import SearchResults from './SearchResults'; 

const baseURL = 'http://localhost:3000';

class App extends React.Component {

    constructor() {

        super();

        this.state = {
            title: "Artists",
            categories: ['Artists','Albums','Playlists'],
            searchResults: {
                Artists: [],
                Albums: [],
                Playlists: []
            }
        };
        this.updateResults = this.updateResults.bind(this);
        this.search = this.search.bind(this);

    }

    componentDidMount() {

        const resources = ['artists','albums','playlists'];
        const requests = resources.map(category => axios.get(`${baseURL}/${category}`));

        Promise.all(requests).then(([artists, albums, playlists]) => {

            const update = {
                searchResults: {
                    Artists: artists.data,
                    Albums: albums.data,
                    Playlists: playlists.data
                }
            };
            this.setState(update);

        });

    }

    search(searchTerm) {
        const resource = this.state.title.toLowerCase();
        axios
            .get(`${baseURL}/${resource}?search=${searchTerm}`)
            .then(this.updateResults);
    }

    updateResults({ data }) { 
        const update = Object.assign({},this.state.searchResults, {[this.state.title]: data});
        this.setState({ searchResults: update });
    }

    changePage(title) {
        this.setState({title});
    }

    render() {
        return (
            <div>
                <Header title="Chinook Database Demo Application" />
                <InputFilter search={this.search} />
                <h1>{this.state.title}</h1>
                <Menu 
                    title={this.state.title}
                    categories={this.state.categories} 
                    changePage={this.changePage.bind(this)} />
                <SearchResults 
                    resultType={this.state.title.slice(0,-1)} 
                    results={this.state.searchResults[this.state.title]} />
            </div>
        );
    }

}

export default App;
