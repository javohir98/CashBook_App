import React from 'react'
import { BiPlus, BiMinus } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { setCashIn, setCashOut } from '../redux/actions/CashBookActions'

const BtnContainer = ({ handleClick }) => {
    const state = useSelector(state => state.count.addItem)
    const dispatch = useDispatch()

    return (
        <div className='btn-container'>
            <button 
                className='btn cash-in' 
                onClick={() => {
                    handleClick()
                    dispatch(setCashIn(45))
                }}>
                <BiPlus />
                Cash In
            </button>
            <button 
                className='btn cash-out' 
                onClick={() => {
                    handleClick()
                    dispatch(setCashOut(5000))
                }}>
                <BiMinus />
                Cash Out
            </button>
        </div>
    )
}

export default BtnContainer