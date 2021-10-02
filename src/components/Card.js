import React from 'react';
import Image from './Image';

const Card = ({user}) => {
    return (
        <div className="ui card segment">
            <div className="image">
                <Image image={user.data[0].Employee.Picture} />
            </div>
            <div className="content">
                <a href="#" className="header">{user.data[0].Employee.FirstName} {user.data[0].Employee.LastName}</a>
                <div className="meta">
                    <span className="date">{user.data[0].Employee.BirthDate}</span>
                </div>
                <div className="description">
                    {user.data[0].Employee.JobPosition} <br />
                    {user.data[0].Employee.Email} <br />
                    {user.data[0].Employee.Phone} 
                </div>
            </div>
        </div>
    );
};

export default Card;