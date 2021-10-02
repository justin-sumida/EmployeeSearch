import React, {useState} from 'react';

const SearchBar = ({onSubmit}) => {
    const [term, setTerm] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        //Using a default function will break this, as 'this' doesn't bind with a regular function correctly.
        //console.log(this.state.term);

        onSubmit(term);
    };

    // Notice no () on the on change function, we do this so that we don't directly trigger the function each time we render.
        return (
            <div className="ui segment">
                <form onSubmit={onFormSubmit} className ="ui form">
                    <div className="field">
                        <label>Employee Search</label>
                        <input type = "text" value={term} onChange={(e) => setTerm(e.target.value)}/>
                    </div> 
                </form>
            </div>
        ); 
}

export default SearchBar;