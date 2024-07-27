import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../Profile/Profile.css'

function Profile() {
  const handleLogout = () => {
    Cookies.remove("loggedInUser");
    setLoggedOut(true); 
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className='profile1'>
          <div className='profile2'>
            <h3>Account</h3>
          </div>
          <div className='profile2 profile3'>
            <p><button type='button' onClick={handleLogout}>Sign out &gt;</button></p>
          </div>
        </div>
        <div className='profile4'>
          <h2>Hi,Buddy.</h2>
        </div>
      </div>

      <div className='profile10'>
        <div className='profile5'>
          <div className='profile6'>
            <h2 style={{fontWeight:'600',fontSize:'30px'}}>Account Settings</h2>
          </div>
          <div className='profile6'>
            <div className='profile8'>
              <h2>Shipping</h2>
            </div>
            <div className='profile8'>
              <h3>Shipping address</h3>
              <p>Coimbatore , Tamilnadu , India</p>
              <p><a href="">Edit &gt;</a></p>
            </div>
            <div className='profile8'>
              <h3>Contact information</h3>
              <p>aswin@gmail.com</p>
              <p><a href="">Edit &gt;</a></p>
            </div>
          </div>
          <div className='profile6'>
            <div className='profile8'>
              <h2>Privacy</h2>
            </div>
            <div className='profile8 profile9'>
              <h3>Personal information</h3>
              <p>You're in control of your personal information and can manage your data or delete your account at any time. AgriSense is committed to protecting your privacy.</p>
              <p><a href="">Manage my personal information &gt;</a></p>
            </div>
          </div>
          <div className='profile6'>
            <div className='profile8'>
              <h2>AgriSense ID</h2>
            </div>
            <div className='profile8 profile9'>
              <p>aswin@gmail.com</p>
              <p><a href="">Manage Apple ID &gt;</a></p>
              <p>Your AgriSense ID is the account you use to access AgriSense services, including our app, data storage, messaging, and more.</p>
              <img src='' width='50%' style={{marginTop:'5%'}}/>
            </div>
          </div>
        </div>
      </div>

      <div className='profile15'>
        <div className='profile16'>
          <h3 style={{fontWeight:'500',fontSize:'30px'}}>Your Orders</h3>
          <p>Track, modify, or cancel an order or make a return.</p>
          <p><a href="">See your order history &gt;</a></p>
        </div>
        <div className='profile16'>
          <h3 style={{fontWeight:'500',fontSize:'30px'}}>Your Saves</h3>
          <p>Whether you're browsing online or in our store, easily save products you're interested in and track your progress here.</p>
          <p><a href="">See your saves &gt;</a></p>
        </div>
      </div>

      <Footer/>
    </div>
  )

}

export default Profile