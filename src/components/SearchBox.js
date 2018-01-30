import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
            <div className="col-md-6 offset-md-3">
            <div className='input-group'>
                <input 
                    className='form-control'
                    type='search'
                    placeholder='search your robots friend' 
                    onChange={searchChange}
                />
            </div>
            </div>
    )
}

export default SearchBox;