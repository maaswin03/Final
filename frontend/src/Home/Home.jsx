import React from 'react'
import Navbar from '../Components/Navbar'
import '../Home/Home.css'


import image1 from '../Image/mainimage.png'
import p1 from '../Image/p1.jpeg'
import p2 from '../Image/p2.jpeg'
import p4 from '../Image/p4.jpeg'
import p3 from '../Image/p3.jpg'
import p5 from '../Image/p5.jpeg'
import Footer from '../Components/Footer'

import video1 from '../Image/intro.mp4'


function Home() {
    return (
        <div>
            <Navbar />

            <div className='home1'>
                <div className='home2'>
                    <div className='home3' >
                        <div className='home4'>
                            <p style={{ color: 'rgb(46, 141, 78)', fontWeight: '600', marginBottom: '0%', fontSize: '17px' }}>WELCOME TO AGRISENSE</p>
                            <h1>A dedicated <span style={{ color: 'rgb(234,80,73)' }}>Friend you</span> can <span style={{ color: 'rgb(46, 141, 78)' }}>trust !</span></h1>
                            <p>Discover our exclusive range of high-quality, affordable smart plant monitoring systems. Designed and manufactured by our brand, these products ensure superior performance and reliability. Find the perfect fit for your needs and experience the difference with our products</p>
                            <button>Explore</button>
                        </div>
                    </div>
                    <div className='home3' style={{ justifyContent: 'end' }}>
                        <img src={image1} alt='Doctor' />
                    </div>
                </div>
            </div>


            <div className='home25'>
                <div className='home26'>
                    <h2>Focusing on a future that’s better</h2>
                    <p>Focusing on a future that's better, AgriSense is at the forefront of revolutionizing agriculture. By harnessing advanced technologies, including AI-driven crop monitoring, disease detection, and yield optimization, we envision a sustainable tomorrow. Our goal is to empower farmers to make informed decisions, boost productivity, and play a vital role in ensuring global food security.</p>
                </div>
            </div>


            <div className='home5'>
                <h2>See What Our Model <span style={{ color: 'rgb(46, 141, 78)' }}>Offers</span> & What We <span style={{ color: 'rgb(234,80,73)' }}>Provide</span></h2>
                <div className='home6'>
                    <div className='home7'>
                        <div className='home9'>
                            <img src={p1} width='100%' style={{ borderTopLeftRadius: "10px", borderTopRightRadius: '10px' }} />
                        </div>
                        <div className='home11'>
                            <h3>Crop AI</h3>
                            <p>Our AI assists in monitoring crops, detecting diseases, optimizing yield, and recommending suitable crops based on analysis.</p>
                        </div>
                    </div>
                    <div className='home7'>
                        <div className='home9'>
                            <img src={p2} width='100%' style={{ borderTopLeftRadius: "10px", borderTopRightRadius: '10px' }} />
                        </div>
                        <div className='home11'>
                            <h3>Animal Detection</h3>
                            <p>Detect and track animals, useful for wildlife monitoring and livestock management.</p>
                        </div>
                    </div>
                    <div className='home7'>
                        <div className='home9'>
                            <img src={p3} width='100%' />

                        </div>
                        <div className='home11'>
                            <h3>Crop Doctor</h3>
                            <p>Our AI system uses sensor data and advanced analysis to monitor crop health, detect diseases and optimize yield.</p>
                        </div>
                    </div>
                    <div className='home7'>
                        <div className='home9'>
                            <img src={p4} width='100%' />

                        </div>
                        <div className='home11'>
                            <h3>Monitoring and Analytics</h3>
                            <p>Offers real-time visualization, historical analysis, and predictive analytics for monitoring.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='home27'>
                <div className='home28'>
                    <h2>AgriSense</h2>
                    <p>Focusing on a future that's better, AgriSense is at the forefront of revolutionizing agriculture. By harnessing advanced technologies, including AI-driven crop monitoring, disease detection, and yield optimization, we envision a sustainable tomorrow. Our goal is to empower farmers to make informed decisions, boost productivity, and play a vital role in ensuring global food security.</p>
                </div>
            </div>

            <div className='home5'>
                <h2>Latest News</h2>
                <div className='home6'>
                    <div className='home7' style={{width:'30%',height:'400px'}}>
                        <div className='home11 home20' style={{ borderBottom: 'none', height: '400px' }}>
                            <p style={{ marginBottom: '0', marginTop: '5%', fontSize: '15px', fontWeight: '600' }}>March 20 , 2024</p>
                            <h3>AgriSense Revolutionizes Crop Management with New AI Features</h3>
                            <p>AgriSense has introduced advanced AI features to its platform, enhancing crop management practices. The new AI-powered crop health monitoring system uses satellite imagery and machine learning to identify issues like pests and diseases early on. Additionally, the AI-driven crop yield prediction tool helps farmers plan harvesting and marketing strategies more effectively. CEO Aswin stated, "Our goal is to empower farmers with tools for smarter decisions and better outcomes." Free trials are available for new users. Visit <a href="">AgriSense</a> for more details.</p>
                        </div>
                    </div>
                    <div className='home7' style={{width:'30%',height:'400px'}}>
                        <div className='home11 home20' style={{ borderBottom: 'none', height: '400px' }}>
                            <p style={{ marginBottom: '0', marginTop: '5%', fontSize: '15px', fontWeight: '600' }}>March 01 , 2024</p>
                            <h3>griSense Partners with Agricultural Research Institute for Innovation</h3>
                            <p>AgriSense has teamed up with a leading agricultural research institute to innovate in agriculture. The collaboration aims to develop advanced algorithms for crop monitoring, disease detection, and yield optimization. These algorithms will enhance AgriSense's platform, providing farmers with cutting-edge tools for better crop management.We're thrilled to partner with Agriculture University to drive agricultural innovation," said Aswin, CEO of AgriSense. The collaboration is expected to result in new products and services that will benefit farmers globally. Stay tuned for updates on this exciting partnership.</p>
                        </div>
                    </div>
                    <div className='home7' style={{width:'30%',height:'400px'}}>
                        <div className='home11 home20' style={{ borderBottom: 'none', height: '400px' }}>
                            <p style={{ marginBottom: '0', marginTop: '5%', fontSize: '15px', fontWeight: '600' }}>January 28 , 2024</p>
                            <h3>AgriSense Receives Recognition for Sustainable Farming Practices</h3>
                            <p>AgriSense's innovative approach to agriculture has earned it prestigious recognition for its significant environmental and community impact. Through cutting-edge AI-driven crop management and data-driven decision-making, AgriSense is reshaping farming practices for a sustainable future. The company's commitment to reducing environmental footprints while empowering farming communities has set a new standard in agricultural sustainability.We are honored to be recognized for our efforts," said Aswin, CEO of AgriSense. "At AgriSense, we envision a future where farming is not only productive but also sustainable.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Home