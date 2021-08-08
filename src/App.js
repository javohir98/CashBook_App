import React from 'react'
import './App.css'
import BtnContainer from './components/BtnContainer'
import CashBookContainer from './components/CashBookContainer'
import ContentHeader from './components/ContentHeader'
import Header from './components/Header'
import Search from './components/Search'
import TotalBalance from './components/TotalBalance'

function App() {

  return (
    <div className='CashBook'>
      <Header />
      <Search />
      <ContentHeader />
      <TotalBalance />
      <CashBookContainer />
      <BtnContainer />
    </div>
  )
}

export default App
