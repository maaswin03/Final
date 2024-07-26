import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import '../Pricing/Pricing.css'
import Footer from '../Components/Footer'

function Pricing() {
  const handleamount = (e) => {
    e.preventDefault()
    handleSubmit(5000)
  }

  const handleamount1 = (e) => {
    e.preventDefault()
    handleSubmit(10000)
  }

  const handleamount2 = (e) => {
    e.preventDefault()
    handleSubmit(15000)
  }

  const handleSubmit = (amount) => {
    if (amount === "") {
      alert("Please enter amount");
    } else {
      var options = {
        key: "rzp_test_sz6vXhYYcZATwz",
        key_secret: "Z4OjloVh5GUOpbya26cCKMt7",
        amount: amount * 100,
        currency: "INR",
        name: "AgriSense",
        description: "for testing purpose",
        prefill: {
          name: "ASWIN M A",
          email: "aswin@gmail.com",
          contact: "9597496287"
        },
        notes: {
          address: "Razorpay Corporate office"
        },
        theme: {
          color: "#3399cc"
        }
      };


      var pay = new window.Razorpay(options);
      pay.open();
    }
  }

  return (
    <div>
      <Navbar />
      <div className='products1'>
        <div className='products2'>


          <div className='products3'>
            <div>
              <h2>Startup</h2>
              <div>
                <div className='products4'>
                  <h3>₹5,000.00</h3>
                </div>
                <p>Everything you need to get started</p>
              </div>
              <div>
                <ul>
                  <li><i class="fa fa-check" style={{ fontSize: '18px'}}></i><span>Basic Monitoring</span></li>
                  <li><i class="fa fa-check" style={{ fontSize: '18px'}}></i><span>Limited Sensor Support</span></li>
                  <li><i class="fa fa-check" style={{ fontSize: '18px'}}></i><span>Standard Customer Support</span></li>
                  <li><i class="fa fa-check" style={{ fontSize: '18px'}}></i><span>Affordable Pricing</span></li>
                </ul>
              </div>
            </div>
            <div className='products5'>
              <button onClick={handleamount}>Order Now</button>
            </div>
          </div>


          <div className='products3'>
            <div>
              <h2>Enterprises</h2>
              <div>
                <div className='products4'>
                  <h3>₹10,000.00</h3>
                </div>
                <p>Everything in the Startup plan plus</p>
              </div>
              <div>
                <ul>
                  <li><i class="fa fa-check" style={{ fontSize: '18px'}}></i>Expanded Monitoring</li>
                  <li><i class="fa fa-check" style={{ fontSize: '18px'}}></i>Support for a variety of sensors</li>
                  <li><i class="fa fa-check" style={{ fontSize: '18px'}}></i>Advanced Data Analytics</li>
                  <li><i class="fa fa-check" style={{ fontSize: '18px'}}></i>Priority Customer Support</li>
                </ul>
              </div>
            </div>
            <div className='products5'>
              <button onClick={handleamount1}>Order Now</button>
            </div>
          </div>


          <div className='products3'>
            <div>
              <h2>Premium</h2>
              <div>
                <div className='products4'>
                  <h3>₹15,000.00</h3>
                </div>
                <p>Everything in the Enterprises plan plus</p>
              </div>
              <div className='products6'>
                <ul>
                  <li><i class="fa fa-check" style={{ fontSize: '18px'}}></i>Comprehensive Monitoring</li>
                  <li><i class="fa fa-check" style={{ fontSize: '18px'}}></i>Enhanced Sensor Support</li>
                  <li><i class="fa fa-check" style={{ fontSize: '18px'}}></i>Advanced Data Analysis</li>
                  <li><i class="fa fa-check" style={{ fontSize: '18px'}}></i>Enhanced Data Security</li>
                </ul>
              </div>
            </div>
            <div className='products5'>
              <button onClick={handleamount2}>Order Now</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div >
  )
}

export default Pricing