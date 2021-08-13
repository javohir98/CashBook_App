import React from 'react'
import { BiPlus, BiMinus } from 'react-icons/bi'

const BtnContainer = ({ handleClick }) => {

    return (
        <div className='btn-container'>
            <button className='btn cash-in' onClick={handleClick}>
                <BiPlus />
                Cash In
            </button>
            <button className='btn cash-out' onClick={handleClick}>
                <BiMinus />
                Cash Out
            </button>
        </div>
    )
}

export default BtnContainer