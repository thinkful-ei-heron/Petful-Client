import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class TopNav extends Component {
    render() {
        return(
            <div className='nav'>
                <Link to='/'>Petful</Link>
                <h1> FIFO Adoption Ag<i class="fas fa-paw"></i>ncy</h1> 
            </div>
        )
    }
}

export default TopNav;