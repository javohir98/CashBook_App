import React from 'react'
import Date from './Date'
import CashBook from './CashBook';
import { useSelector } from 'react-redux';

const  CashBookContainer = () => {
    const state = useSelector(state => state.count.addItem)

    return (
        <div className='cash_book_container'>
            <Date />     
            {state.map((item) => {
                return (
                    <CashBook 
                        amount={item.amount} 
                        type={item.type} 
                        remark={item.remark} 
                        clock={item.addHour}
                        balance={item.balance}
                        key={item.id} />
                )
            })}   
        </div>
    )
}

export default CashBookContainer 
