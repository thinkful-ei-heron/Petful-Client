import React, { Component } from 'react';
import ApiService from '../Api-Service/Api-Services';

class Adoption extends Component {
    state = {
        dog: [],
        cat: null,
        user: 'You',
        currentUser: ''
    }

    componentDidMount(){
        ApiService.getCurrentDog()
        .then( res => {
            //console.log(res);
                this.setState({
                    dog: res //Object.entries(dog)
                })
            })

    }

    renderDog() {
        let dogName = this.state.dog.name;
        let imgDog = this.state.dog.imageURL;
        if(!dogName){
            dogName = '';
        }
        console.log(dogName)
        return (
            <div>
                <h4>Name: {dogName}</h4>
                <img src={imgDog} alt='dog'></img>
                
            </div>
        )
    }

    render() {
        //console.log(this.state.dog)
        return (
            <div>Adoption
                {this.renderDog()}
            </div>
        );
    }

}
export default Adoption;