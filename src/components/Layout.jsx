import React,{useState} from 'react'
import Navbar from './Nav/Navbar'
import BankingNav from './Nav/BankingNav'
import Footer from './Footer';

const Layout = ({children}) => {

   const [showMenu, setShowMenu] = useState(false);

   const handleMenu = () => {
     setShowMenu(!showMenu);
   };

  return (
    <div className=''>
      <Navbar showMenu={showMenu} handleMenu={handleMenu} />
      <BankingNav showMenu={showMenu}  />
      {children}
      <Footer/>
    </div>
  );
}

export default Layout