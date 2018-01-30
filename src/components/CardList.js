import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    //looping through card list
    return (
        <div className="row">
           {
            robots.map((user, i) => {
                return (
                <Card 
                    key={i}
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email} 
                />
                );
            })
           }
        </div>
    );
}

export default CardList;