import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'

function Search() {
    return (
        <div className='search-bar'>
            <button><BiSearchAlt2 /></button>
            <input type='text' name='search' placeholder='Search by Remark' />
        </div>
    )
}

export default Search
