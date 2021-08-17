import React, { useState } from 'react'
import { HiArrowLeft } from 'react-icons/hi'
import { RiCalendar2Fill } from 'react-icons/ri'
import { FiClock } from 'react-icons/fi'
import { MdPhotoCamera } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { setCashIn, setCashOut } from '../redux/actions/CashBookActions'

const AddCash = ({ toggle, toggleClick }) => {
    const type = useSelector(state => state.type)
    const dispatch = useDispatch()
    const [number, setNumber] = useState()
    const [remark, setRemark] = useState('')

    const handleSave = (e) => {
        e.preventDefault();
        if (type === "in") {
            dispatch(setCashIn({number,remark}))
        } else if (type === 'out') {
            dispatch(setCashOut({number,remark}))
        }
        toggleClick();
        setNumber('')
        setRemark('')
    }

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const hour = `${current.getHours()}:${current.getMinutes() < 10 ? `0${current.getMinutes()}`: current.getMinutes()}`
  
    return (
        <div className={toggle ? "add_cash active" : "add_cash"} >
            <div className="add_cash_title">
                <HiArrowLeft onClick={toggleClick} />
                <span>Cash Out</span>
            </div>
            <div className="add_cash_date">
                <div className="full_date">
                    <RiCalendar2Fill />
                    {date}
                </div>
                <div className="hour">
                    <FiClock />
                    {hour}
                </div>
            </div>
            <form onSubmit={handleSave}>
                <div className="add_cash_form">
                    <input type="number" name="amount" placeholder='Amount' onChange={(e) => setNumber(e.target.value)} value={number} />
                    <input type="text" name="remark" placeholder='Remark' onChange={(e) => setRemark(e.target.value)} value={remark} />
                    <div className="attach_image">
                        <MdPhotoCamera />
                        Attach Image
                    </div>
                </div>
                <div className="save">
                    <button type='submit'>Save</button>
                </div>
            </form>
        </div>
    )
}

export default AddCash