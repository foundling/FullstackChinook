import React from 'react'; 
import {debounce} from 'throttle-debounce';

class InputFilter extends React.Component {

    constructor(props) {
        super();
        this.getInput = debounce(500, this.getInput);
    }

    getInput(e) {
        const { value } = this.query; 
        console.log(value);
        this.props.search(value);
    }

    render() {
        return (
            <input 
                ref={input => this.query = input} 
                onKeyUp={this.getInput.bind(this)} className="query" />
        )
    }
}

export default InputFilter;
