import React from 'react';

class SearchBar extends React.Component {
    state = {term: ""};

    // event is an object that holds information about the event that just occured
    // this is the callback that gets called when the input - Search bar is changed ie. text is typed
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    // here we're basically assigning a function to the function name onFormSubmit
    // which means that there is an automatic this binfing similar to how the the variable state above 
    // has binding to the this
    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.term);
    };
    
    // Note:
    // leaving off the parentheses means the callback will be called at some point in the future as opposed to 
    // everytime a re-render occurs

    render() {
        return (
            <div className="ui segment" style={{marginTop: '20px'}}>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                    
                        <input 
                            type= "text" 
                            value={this.state.term} 
                            onChange={(e) => this.setState({term: e.target.value})}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;