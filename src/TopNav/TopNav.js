import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class TopNav extends Component {
    render() {
        return(
            <div className='nav'>
                <Link to='/'>Petful</Link>
                <h1> FIFO Adoption Agency</h1>
            </div>
        )
    }
}

export default TopNav;