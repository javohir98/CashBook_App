import React, { useEffect } from 'react'
import { HiArrowLeft } from 'react-icons/hi'
import { RiCalendar2Fill } from 'react-icons/ri'
import { FiClock } from 'react-icons/fi'
import { MdPhotoCamera } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { setCashIn, setCashOut } from '../redux/actions/CashBookActions'

const AddCash = ({ toggle, toggleClick }) => {
    const state = useSelector(state => state.count.addItem)
    const dispatch = useDispatch()

    // useEffect(() => {

    //     const interval = setInterval(() => {
    //         dispatch(setCashOut(45))
    //         dispatch(setCashIn(500))
    //     }, 5000)

    //     return () => {
    //         clearInterval(interval)
    //     }
    // })

    const handleSave = () => {
        toggleClick()
    }

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const hour = `${current.getHours()}:${current.getMinutes()}`
  
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
            <div className="add_cash_form">
                <input type="number" name="amount" placeholder='Amount' />
                <input type="text" name="remark" placeholder='Remark' />
                <div className="attach_image">
                    <MdPhotoCamera />
                    Attach Image
                </div>
            </div>
            <div className="save">
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}

export default AddCash