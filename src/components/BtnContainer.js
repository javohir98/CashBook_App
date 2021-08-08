import React from 'react'
import { BiPlus, BiMinus } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { setCashIn, setCashOut } from '../redux/actions/CashBookActions'

const BtnContainer = () => {
    const dispatch = useDispatch()

    return (
        <div className='btn-container'>
            <button className='btn cash-in' onClick={() => dispatch(setCashIn(45))}>
                <BiPlus />
                Cash In
            </button>
            <button className='btn cash-out' onClick={() => dispatch(setCashOut(45))}>
                <BiMinus />
                Cash Out
            </button>
        </div>
    )
}

export default BtnContainer