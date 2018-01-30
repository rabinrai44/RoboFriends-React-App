import React from 'react';

const Card = (props) => {
    // structure properties
    const { name, email, id } = props;
    return (
        <div className='col-md-4'>
            <div className="card mb-4 box-shadow">
                <img className="card-img-top" alt='this is photos tag' src={`https://robohash.org/${id}?200x200`}  />
                <div className="card-body">
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;