import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

//how do i gather data from the database?

export default class Main extends React.Component {
    constructor(){
        super()
        this.state = {
            students: {}
        }
    }

    async componentDidMount() {
        //{data} was initially an object
        //I needed to destructure it in order to pull the actual data I needed
        
        const {data}= await axios.get('/student')
        console.log('data is ', data)
        this.setState({
            students: data
        })
        // paused on promise rejection with status 404


        // console.log(data)
        // practice using axios to get the students
        //console.log what i'm receiving from the db
    }
    render() {
    console.log('state is ', this.state)
    return (
        <h1>{'Hello React!'}</h1>
    );
    }
}
