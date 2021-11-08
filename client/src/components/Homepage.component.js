import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Places = props => (
    
)

export default class Homepage extends Component {
  constructor(props) {
    this.state = {places: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/places/')
      .then(response => {
        this.setState({ places: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {
    axios.delete('http://localhost:5000/places/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      places: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.places.map(currentplace => {
      return <Places exercise={currentplace} key={currentplace._id}/>;
    })
  }

  render() {
    return (
   
    )
  }
}
