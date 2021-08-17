import React from 'react'
import { BiPlus, BiMinus } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { setType } from '../redux/actions/CashBookActions'

const BtnContainer = ({ handleClick }) => {
    const dispatch = useDispatch()

    return (
        <div className='btn-container'>
            <button 
                className='btn cash-in' 
                onClick={() => {
                    handleClick()
                    dispatch(setType("in"))
                }}>
                <BiPlus />
                Cash In
            </button>
            <button 
                className='btn cash-out' 
                onClick={() => {
                    handleClick()
                    dispatch(setType("out"))
                }}>
                <BiMinus />
                Cash Out
            </button>
        </div>
    )
}

export default BtnContainer