import React from 'react'
import NumberFormat from 'react-number-format';

const  CashBook = () => {
    return (
        <div className="cash_book">
            <div className="cash_book_left">
                <h4 className='cash_name'>Do something</h4>
                <span className='cash_time'>6:07 pm</span>
            </div>
            <div className="cash_book_right">
                <NumberFormat className='cost_format cash_amount out' value={45895125} thousandSeparator={true} />
                <span className='tot_balance' style={{textAlign: 'right'}}>Balance: 455,458</span>
            </div>
        </div>
    )
}

export default CashBook
