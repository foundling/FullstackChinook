import React from 'react';

function App(props) {

    return (
        <ul>
            { props.categories.map(category => <li>{category}</li>) }
        </ul>
    );

}

export default App;
