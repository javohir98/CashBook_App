import React from 'react'
import { BiPlus, BiMinus } from 'react-icons/bi'

const BtnContainer = () => {
    return (
        <div className='btn-container'>
            <button className='btn cash-in'>
                <BiPlus />
                Cash In
            </button>
            <button className='btn cash-out'>
                <BiMinus />
                Cash Out
            </button>
        </div>
    )
}

export default BtnContainer