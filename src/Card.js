import React from 'react';

const Card = (props) => {
    // structure properties
    const { name, email, id } = props;
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='this is photos tag' src={`https://robohash.org/${id}?200x200`}  />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;