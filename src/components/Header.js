import React from 'react'
import { MdBook, MdPictureAsPdf } from 'react-icons/md'
import { AiFillCaretDown } from 'react-icons/ai'
import { HiUsers } from 'react-icons/hi'
import { BiDotsVerticalRounded } from 'react-icons/bi'

function Header() {
    return (
        <div className='header'>
            <div className="addbook">
                <MdBook className='addbook_icon' />
                <span>New Book</span>
                <AiFillCaretDown className='addbook_icon_down' />
            </div>
            <ul className='options'>
                <li><HiUsers /></li>
                <li><MdPictureAsPdf /></li>
                <li><BiDotsVerticalRounded /></li>
            </ul>
        </div>
    )
}

export default Header
