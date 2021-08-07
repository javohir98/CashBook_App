import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import ContentHeader from './components/ContentHeader'
import Date from './components/Date'
import Header from './components/Header'
import Search from './components/Search'
import TotalBalance from './components/TotalBalance'
import { setCashIn, setCashOut } from './redux/actions/CashBookActions'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setCashIn(45))
    dispatch(setCashIn(45))
    dispatch(setCashOut(45))
  }, [])

  return (
    <div className='CashBook'>
      <Header />
      <Search />
      <ContentHeader />
      <TotalBalance />
      <Date />
    </div>
  )
}

export default App
