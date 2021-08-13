import React, { useState } from 'react'
import './App.css'
import AddCash from './components/AddCash'
import BtnContainer from './components/BtnContainer'
import CashBookContainer from './components/CashBookContainer'
import ContentHeader from './components/ContentHeader'
import Header from './components/Header'
import Search from './components/Search'
import TotalBalance from './components/TotalBalance'

function App() {
  const [toggle, setToggle] = useState(true)

  const handleClick = () => {
      setToggle(!toggle)
  }

  return (
    <div className='CashBook'>
      <Header />
      <Search />
      <ContentHeader />
      <TotalBalance />
      <CashBookContainer />
      <BtnContainer handleClick={handleClick} />
      <AddCash toggle={toggle} toggleClick={handleClick} />
    </div>
  )
}

export default App
