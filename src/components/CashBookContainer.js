import React from 'react'
import Date from './Date'
import CashBook from './CashBook';

const  CashBookContainer = () => {
    return (
        <div className='cash_book_container'>
            <Date />
            <CashBook />
            <CashBook />
            <CashBook />          
        </div>
    )
}

export default CashBookContainer 
