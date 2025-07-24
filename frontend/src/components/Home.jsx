import React,{useState} from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Navbar2 from './Navbar2'
import SignupModal from './Signup'
import MainLayout from './MainLayout'

const Home = () => {
      const [showSignup, setShowSignup] = useState(false);
  return (
    <div>
        <Navbar onSignupClick={() => setShowSignup(true)} />
        {showSignup && <SignupModal onClose={() => setShowSignup(false)} />}
        <Header/>
        <Navbar2/>
        {/* <Card1/> */}
        <MainLayout/>
    </div>
  )
}

export default Home