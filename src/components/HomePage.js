import React from 'react';
import { Link } from 'react-router-dom'

export default function HomePage(){
    return (
        <div className="container">
        <h2>Home Page</h2>
        <p>
        <Link to="/funduleadiana">funduleadiana</Link> on Github
        </p>
        </div>
    )
}