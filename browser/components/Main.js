
//in components folers, we need React and Axios. Not ReactDOM

import React from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';

//how do i gather data from the database?

export default class Main extends React.Component {
    constructor(){
        super()
        this.state = {
            students: [],
        }
        //whatever the parent structure is, that type is what the data type of the parent structure is

    }

    async componentDidMount() {
        //{data} was initially an object
        //I needed to destructure it in order to pull the actual data I needed
        
        //axious is a way we can grab 

        const {data} = await axios.get('/student')
        this.setState({
            students: data
        })
        // paused on promise rejection with status 404


        // console.log(data)
        // practice using axios to get the students
        //console.log what i'm receiving from the db
    }
    render() {
    console.log(this.state.students)
    return (
 
            <table>
                <tbody>
                    <tr>Name</tr>
                    {/* Warning: validateDOMNesting(...): Text nodes cannot appear as a child of <tr>. */}
                    {
                        this.state.students.map(student => {
                        return <tr key={student.id}><td>{student.fullName}</td></tr>})
                    }
                </tbody>
            </table>
    );
    }
}
