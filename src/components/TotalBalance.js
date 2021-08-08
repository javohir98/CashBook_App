import React from 'react'
import { useSelector } from 'react-redux'
import NumberFormat from 'react-number-format';

const TotalBalance = () => {
    const total = useSelector(state => state.count.totalBalance)
    const totalIn = useSelector(state => state.count.totalIn)
    const totalOut = useSelector(state => state.count.totalOut)
    return (
        <div className='totalBalance_section'>
            <div className="totalBalance">
                <div className="totalBalance_top">
                    <p>Net Balance</p>
                    <span><NumberFormat className='cost_format' value={total} thousandSeparator={true} /></span>
                </div>
                <div className="totalBalance_middle">
                    <p>Total In (+)</p>
                    <span><NumberFormat className='cost_format' value={totalIn} thousandSeparator={true} /></span>
                </div>
                <div className="totalBalance_bottom">
                    <p>Total Out (-)</p>
                    <span><NumberFormat className='cost_format' value={totalOut} thousandSeparator={true} /></span>
                </div>
            </div>
        </div>
    )
}

export default TotalBalance
