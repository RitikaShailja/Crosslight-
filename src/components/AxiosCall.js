import React from 'react'
import axios from 'axios'
import PostAxiosAdd from './PostAxiosAdd';

class AxiosCall extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            Persons : []
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log("Received object is ", res)
                this.setState({
                    Persons : res.data 
                })
            })
            .catch((err) =>
            {
                console.log("Error", err)
            })  
    }
    render(){
        return(
            <div>
                <p>lorem ipsum</p>
                {
                    this.state.Persons.map(person => <li key={person.id}>{person.name}</li>)
                }
                <div>
                    <PostAxiosAdd 
                        
                    />
                </div>
            </div>
        )
    }

} 
export default AxiosCall;