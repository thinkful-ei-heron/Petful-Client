import React, { Component } from 'react';
import ApiService from '../Api-Service/Api-Services';

class Adoption extends Component {
    state = {
        dog: [],
        cat: [],
        userList:[],
        user: 'You',
        currentUser: ''
    }

    componentDidMount(){
        ApiService.getCurrentDog()
        .then( res => {
            //console.log(res);
                this.setState({
                    dog: res
                })
        })
        ApiService.getCurrentCat()
        .then( res => {
            //console.log(res);
                this.setState({
                    cat: res
                })
        })
        ApiService.getCurrentUser()
        .then( res => {
            //console.log(res);
                this.setState({
                    user: res
                })
        })
        ApiService.getAllUser()
        .then( res => {
            //console.log(res);
                this.setState({
                    userList: res
                })
        })
    }

    renderUserQueue(){
        let userList = this.state.userList;
        if(userList){
            console.log(userList);
            for(let i = 0; i <userList.length; i++){
                let placeInLine = userList[i];
                if(placeInLine.userName == 'You' && i === 0){
                    return(
                        <h3>
                        {`You are up! Adopt!`}</h3>
                        );
                } else if(placeInLine.userName == 'You') {
                    return(
                        <h3>
                        {`You are number ${i + 1} in line`}
                        </h3>
                        );
                }
                //console.log(placeInLine);
            } 
            }
    }
     
    

    renderDog() {
        let dogName = this.state.dog.name;
        let imgDog = this.state.dog.imageURL;
        let imgDesc = this.state.dog.imageDescription;
        let gender = this.state.dog.sex;
        let age = this.state.dog.age;
        let breed = this.state.dog.breed;
        let story = this.state.dog.story;

        if(!dogName){
            dogName = '';
        }
        // console.log(dogName)
        return (
            <div>
                <img src={imgDog} alt='dog'></img>
                <h3>Name: {dogName}</h3>
                <p>Description:{imgDesc}</p>
                <p>Story: {story}</p>
                <h3>Gender: {gender}</h3>
                <h3>Age: {age}</h3>
                <h3>Breed:{breed}</h3>
                <button>Adopt</button>
            </div>
        )
    }

    renderCat() {
        let catName = this.state.cat.name;
        let imgCat = this.state.cat.imageURL;
        let imgDesc = this.state.cat.imageDescription;
        let gender = this.state.cat.sex;
        let age = this.state.cat.age;
        let breed = this.state.cat.breed;
        let story = this.state.cat.story;

        if(!catName){
            catName = '';
        }
        // console.log(catName)
        return (
            <div>
                <img src={imgCat} alt='cat'></img>
                <h3>Name: {catName}</h3>
                <p>Description:{imgDesc}</p>
                <p>Story: {story}</p>
                <h3>Gender: {gender}</h3>
                <h3>Age: {age}</h3>
                <h3>Breed:{breed}</h3>
                <button>Adopt</button>
            </div>
        )
    }
    render() {
        //console.log(this.state.dog)
        return (
            <div>
                {this.renderDog()} {this.renderCat()}
                {this.renderUserQueue()}
            </div>
        );
    }

}
export default Adoption;