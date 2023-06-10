import React from 'react';
import './Second.css'
import Footer from '../Footer/Footer';

const Second = () => {
    return (
        <div>
            <div>
                <h1 className='job-title'>Job Details</h1>
            </div>
            <div className='job-container'>
                <div className='job-dis'>
                    <p><span className='job-text'>Job Description : </span> A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective   for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</p>
                    <p><span className='job-text'>Job Responsibility :  </span> Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</p>
                    <h4 className='job-text'>Educational Requirements:</h4>
                       <p> Bachelor degree to complete any reputational university.
                    </p>
                    <h4 className='job-text'>Experiences: </h4>
                        <p>2-3 Years in this field.
                    </p>
                </div>
                <div>
                    <h1>Job Details</h1>
                    <hr />
                    <p>Salary : 100K - 150K (Per Month)Salary : 100K - 150K (Per Month)</p>
                    <p>Job Title : Product Designer</p>
                    <h1>Contact Information</h1>
                    <hr />
                    <p>Phone : 01750-00 00 00</p>
                    <p>Email : info@gmail.com</p>
                    <p>Address : Dhanmondi 32, Sukrabad
                        Dhaka, Bangladesh</p>
                        <button className='btn-style'>Apply Now</button>
                </div>
            </div>
            <div className='job-footer'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Second;