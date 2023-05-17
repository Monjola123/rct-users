import React, { Component } from "react";
import {Form,Button} from 'react-bootstrap';
class AddUserform extends Component {
    constructor(props) {
        super(props);
        this.state={
            name: "",
            email: "",
            gen:"",  
        }
    }
    handleChange = (e) => {
      e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value,
        });
        console.log(this.state);
    };
handleSubmit = (e) => { 
  e.preventDefault();
  this.props.addUser(this.state);
  this.setState({
    name: "",
    email: "",
    gen:"",
  })
  console.log("form submitted: ", this.state)
} 
  render(){
    return (
        <Form onSubmit={this.handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicname">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" name="name" 
          value={this.state.name}
          onChange={this.handleChange} />
          <Form.Text className="text-muted">
               </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email"  value={this.state.email} onChange={this.handleChange} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicgen">
          <Form.Label>Gen</Form.Label>
          <Form.Control type="number" placeholder="gen no" name="gen" value={this.state.gen} onChange={this.handleChange} />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
export default AddUserform;