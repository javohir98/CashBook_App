import React, { useEffect, useState } from 'react'
import './App.css'
import AddCash from './components/AddCash'
import BtnContainer from './components/BtnContainer'
import CashBookContainer from './components/CashBookContainer'
import ContentHeader from './components/ContentHeader'
import Header from './components/Header'
import Search from './components/Search'
import TotalBalance from './components/TotalBalance'

function App() {
  const [toggle, setToggle] = useState(false)
  const tele = window.Telegram.WebApp;

  const handleClick = () => {
      setToggle(!toggle)
  }

  useEffect(() => {
    tele.ready();
    console.log(tele)
  }, [])

  const test = () => {
    alert(tele.initData)
  }

  return (
    <div className='CashBook'>
      <Header />
      <Search />
      <ContentHeader />
      <TotalBalance />
      <button onClick={test}>test initData</button>
      <CashBookContainer />
      <BtnContainer handleClick={handleClick} />
      <AddCash toggle={toggle} toggleClick={handleClick} />
    </div>
  )
}

export default App
