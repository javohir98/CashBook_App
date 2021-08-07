import React from 'react'

const TotalBalance = () => {
    return (
        <div className='totalBalance_section'>
            <div className="totalBalance">
                <div className="totalBalance_top">
                    <p>Net Balance</p>
                    <span>0</span>
                </div>
                <div className="totalBalance_middle">
                    <p>Total In (+)</p>
                    <span>0</span>
                </div>
                <div className="totalBalance_bottom">
                    <p>Total Out (-)</p>
                    <span>0</span>
                </div>
            </div>
        </div>
    )
}

export default TotalBalance
