import React from 'react';
import './Footer.css'
import image from '../../../assets/Icons/Group 9969.png'

const Footer = () => {
    return (
        <div>
            <div className='container'>
                <div className="footer-container">
                    <h1>Job-Hunting</h1>
                    <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <img src={image} alt="" />
                </div>
                <div className="footer-container">
                    <h1>Company</h1>
                    <div>
                        <p>About us</p>
                        <p>Work</p>
                        <p>Latest news</p>
                        <p>Carrier</p>
                    </div>
                </div>
                <div className="footer-container">
                    <h1>Product</h1>
                    <div>
                        <p>Prototype</p>
                        <p>Plans&Pricing</p>
                        <p>Customers</p>
                        <p>Integrations</p>
                    </div>
                </div>
                <div className="footer-container">
                    <h1>Support</h1>
                    <div>
                        <p>Help Desk</p>
                        <p>Sales</p>
                        <p>Become a Partner</p>
                        <p>Developers</p>
                    </div>
                </div>
                <div className="footer-container">
                    <h1>Contact</h1>
                    <div>
                        <p>Abidpur,Burichong,Cumilla</p>
                        <p>01690-143069</p>
                    </div>
                </div>
            </div>
            <hr className='style' />
            <div className='footer-last'>
                <p>@2023 CareerHub. All Rights Reserved</p>
                <p>Powered by CareerHub</p>
            </div>
        </div>
    );
};

export default Footer;