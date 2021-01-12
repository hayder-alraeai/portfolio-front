import React from 'react'
import '../App.css';
import Center from './Center';
import Left from './Left';
import Right from './Right';
const Body = () => {
    return(
        <div className="body body-container">
            <Left />
            <Center />
            <Right />
        </div>
    )
}
export default Body