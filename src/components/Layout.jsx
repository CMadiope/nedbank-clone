import React from 'react'
import Navbar from './Nav/Navbar'
import BankingNav from './Nav/BankingNav'

const Layout = ({children}) => {
  return (
    <div>
    <Navbar/>
    <BankingNav/>
      {children}
    </div>
  )
}

export default Layout