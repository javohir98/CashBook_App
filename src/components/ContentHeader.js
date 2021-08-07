import React from 'react'
import { RiCalendar2Fill } from 'react-icons/ri'
import { FiFilter } from 'react-icons/fi'

const ContentHeader = () => {
    return (
        <div className='content-header'>
            <div className="content_top">
                <div className="data_sort">
                    <RiCalendar2Fill className='content_top_icon' />
                    <span className="content_top_title">
                        All Time
                    </span>
                </div>
                <div className="filters">
                    <FiFilter className='content_top_icon' />
                    <span className="content_top_title">
                        Filters
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ContentHeader
