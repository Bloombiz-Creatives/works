import React from 'react'
import LoginPage from './Components/Login'
import ForgotPassword from './Components/Forogotpassword'
import Resetpassword from './Components/Resetpassword'
import OtpInput from './Components/Otpinput'
import Addproduct from './Components/Addproduct'
import OrdersTable from './Components/Order'
import OrderPage from './Components/Orderpage'
import Customerspage from './Components/Customerspage'


const App = () => {
  return (
    <div className='text-red-500 bg-slate-500'>
       <LoginPage/>
      <ForgotPassword/>
      <Resetpassword/>
      <OtpInput/> 
      <Addproduct/>
      <OrdersTable/>
      <OrderPage/>
      <Customerspage/>
      
    
      
      
    
    </div>
  )
}

export default App