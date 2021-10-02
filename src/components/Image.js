import React from 'react';

const Image = ({image}) => {
    return <img src={`data:image/jpg;base64,${image}`} alt="text"></img>;

};

export default Image;