import React, {useState, useEffect} from 'react';
import Card from './components/Card';
import User from './apis/User';
import SearchBar from './components/SearchBar';
import useUser from './hooks/useUser';

const App = () => {
    const [employee, search] = useUser('');
    if (employee && !(employee.status === 400 || employee.status === 404)){
    return (
        <div className="ui segment">
            <SearchBar onSubmit={search} />
            <Card user={employee}/>
        </div>
    );
    }
    else if (employee.status === 400 || employee.status === 404){
        return (
            <div className="ui segment">
                <SearchBar onSubmit={search} />
                <div className="ui negative message">
                    <i className="close icon"></i>
                    <div className="header">
                        Could not find an employee with the given name.
                    </div>
                    <p>Make sure you search given the currently active employees and that you only include a first and last name.</p>
                </div>
            </div>
        );
    }
    return (
        <div className="ui segment">
            <SearchBar onSubmit={search} />
            <div className="ui active inline loader"></div>
        </div>
    );
};

export default App;