import React from 'react';
import './First.css'
import image from '../../../assets/All Images/P3OLGJ1 copy 1.png'
import catagory1 from '../../../assets/Icons/accounts 1.png'
import catagory2 from '../../../assets/Icons/business 1.png'
import catagory3 from '../../../assets/Icons/chip 1.png'
import catagory4 from '../../../assets/Icons/social-media 1.png'
import feture1 from '../../../assets/Logo/google-1-1 1-1.png'
import feture2 from '../../../assets/Logo/netflix-4 1.png'
import feture3 from '../../../assets/Logo/tesla-9 1.png'
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom'
import Second from '../Second/Second';

const First = () => {
    return (
        <div>
            <section className='first-page-first-container'>
                <div className='title-style'>
                    <h6>One Step Closer To Your <span className='title-text-style'>Dream Job</span></h6>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn-style'>Get Started</button>
                </div>
                <div>
                    <img src={image} alt="" />
                </div>
            </section>
            <section className='catagory'>
                <div>
                    <h1 className='catagory-title'>Job Category List</h1>
                    <p className='p-text'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='catagory-box'>
                    <div className="first-catagory">
                        <img src={catagory1} alt="" />
                        <h1>Account & Finance</h1>
                        <p>300 Jobs Available</p>
                    </div>
                    <div className="first-catagory">
                        <img src={catagory2} alt="" />
                        <h1>Creative Design</h1>
                        <p>100+ Jobs Available</p>
                    </div>
                    <div className="first-catagory">
                        <img src={catagory3} alt="" />
                        <h1>Marketing & Sales</h1>
                        <p>150 Jobs Available</p>
                    </div>
                    <div className="first-catagory">
                        <img src={catagory4} alt="" />
                        <h1>Engineering Job</h1>
                        <p>224 Jobs Available</p>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <h1 className='catagory-title'>Featured Jobs</h1>
                    <p className='p-text'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='feture-title'>
                    <div className="first-feture">
                        <img src={feture1} alt="" />
                        <h1>Technical Database Engineer</h1>
                        <p>Google LLC</p>
                        <div className='btn-inline'>
                            <button className='btn-text'>Remote</button>
                            <button className='btn-text'>Full Time</button>
                        </div>
                        <p>Dhaka, Bangladesh Salary : 100K - 150K</p>
                        <button className='btn-style'>View Details</button>
                    </div>
                    <div className="first-feture">
                        <img src={feture3} alt="" />
                        <h1>Senior Product Designer</h1>
                        <p>Netflix</p>
                        <div className='btn-inline'>
                            <button className='btn-text'>Remote</button>
                            <button className='btn-text'>Full Time</button>
                        </div>
                        <p>Dhaka, Bangladesh Salary : 100K - 150K</p>
                        <button className='btn-style'>View Details</button>
                    </div>
                    <div className="first-feture">
                        <img src={feture2} alt="" />
                        <h1>Software Engineer</h1>
                        <p>Tesla</p>
                        <div className='btn-inline'>
                            <button className='btn-text'>Remote</button>
                            <button className='btn-text'>Full Time</button>
                        </div>
                        <p>Dhaka, Bangladesh Salary : 100K - 150K</p>
                        <button className='btn-style'>View Details</button>
                    </div>
                    <div className="first-feture">
                        <img src={feture1} alt="" />
                        <h1>Technical Database Engineer</h1>
                        <p>Google LLC</p>
                        <div className='btn-inline'>
                            <button className='btn-text'>Remote</button>
                            <button className='btn-text'>Full Time</button>
                        </div>
                        <p>Dhaka, Bangladesh Salary : 100K - 150K</p>
                        <button className='btn-style'>View Details</button>
                    </div>
                </div>
            </section>
            <section className='see-more'>
                <button className='btn-style'>See All Jobs</button>
            </section>
            <section className='footer'>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default First;