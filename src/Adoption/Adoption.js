import React, { Component } from 'react';
import ApiService from '../Api-Service/Api-Services';

class Adoption extends Component {
    state = {
        dog: null,
        cat: null,
        user: 'You',
        currentUser: ''
    }

    componentDidMount(){
        ApiService.getCurrentDog()
            .then( dog => {
                this.setState({
                    dog
                })
            })
    }

    renderDog() {
        return (
            <>
                <h4>{this.state.dog.name}</h4>
            </>
        )
    }

    render() {
        console.log(this.state.dog)
        return (
            <div>Adoption
                {this.renderDog()}
            </div>
        );
    }

}
export default Adoption;