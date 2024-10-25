import React from 'react'
import LoginPage from './Components/Login'
import ForgotPassword from './Components/Forogotpassword'
import Resetpassword from './Components/Resetpassword'
import OtpInput from './Components/Otpinput'
import Addproduct from './Components/Addproduct'


const App = () => {
  return (
    <div className='text-red-500 bg-slate-500'>
       <LoginPage/>
      <ForgotPassword/>
      <Resetpassword/>
      <OtpInput/> 
      <Addproduct/>
    
      
      
    
    </div>
  )
}

export default App