import React from 'react'
import '../App.css';
import profile from './images/profile.png'
const Left = () => {



    return(
            <div className="body-left">
                <div className="left-header"></div>
                <img className="profile-image" src={profile} />
                <p className="left-name">Full name</p>
                <div className="left-info">
                    <ul>
                        <li>Name: Hayder Alraeai</li>
                        <li>Email: hayder860116@hotmail.com</li>
                        <li>Role: Admin</li>
                        <li>Phone: 0700466678</li>
                    </ul>
                </div>
            </div>
    )
}
export default Left