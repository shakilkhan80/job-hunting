import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav>
            <div>
                <h2>Job-Hunting</h2>
            </div>
            <div className='nav-link'>
                <Link to='/'>Home</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/applied'>Applied Jobs</Link>
                <Link to='/blog'>Blog</Link>
            </div>
            <div>
                <button className='btn-style'>Star Applying</button>
            </div>
        </nav>
    );
};

export default Header;