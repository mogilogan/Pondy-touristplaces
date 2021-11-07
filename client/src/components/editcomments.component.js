import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditComments extends Component {
  constructor(props) {
    super(props);

    this.onChangeComment = this.onChangeComment.bind(this);
    

    this.state = {
      Comment: '',
      
  }
}

  componentDidMount() {
    axios.get('http://localhost:5000/Comments/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          comment: response.data.comment,
          
        })   
      })
      .catch(function (error) {
        console.log(error);
      })


  }

  onChangeComment(e) {
    this.setState({
      username: e.target.value
    })
  }


  onSubmit(e) {
    e.preventDefault();

    const review = {
      comment: this.state.comment,
    }

    console.log(review);

    axios.post('http://localhost:5000/comments/update/' + this.props.match.params.id, review)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return ();
    
}
