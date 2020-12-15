import React from 'react'
import {Link} from 'react-router-dom'


export default function Home() {
    return (
        <div>
            <h2>Homepage</h2>
            <p>This is homepage</p>
            <Link to='/gallary'><div>gallary</div></Link>
        </div>
    )
}
