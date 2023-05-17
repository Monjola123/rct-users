import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import './App.css'
import Users from './Components/Users';
import React, {Component} from 'react';
import AddUserform from './Components/AddUserForm';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [
       {
        name: "John", 
        email: "john@example.com",
         gen: 1,
         id: "hiqkosabz828q",
       },
       {
        name: "Jane", 
        email: "jane@example.com",
         gen: 5,
         id: "ncdsuocwasw82wis",
       },
       
      ]
    }
  }
  addNewUser = (user) => {
    user.id = Math.random().toString()
 this.setState({
  users: [...this.state.users, user ]
 })
  }
  deleteUser = (id) => {
    let undeletedUsers = this.state.users.filter((user) => user.id !== id)
    this.setState({
      users: undeletedUsers
    })
  }
  editUser = (id, updatedUser) => {
    this.setState({
     users: this.state.users.map(user => user.id === id ? updatedUser : user)
    })
  }
render() {
  return (
    < div className='body'>
    <Container fluid style={{marginTop: "2rem"}}>
      <Row>
        <Col md="4">
          <h4>Add User</h4>
        <AddUserform addUser={this.addNewUser} />
       </Col>
       <Col>
       <h4>All Shenk Users</h4>
      <Users 
      usersData={this.state.users} 
      deleteUser={this.deleteUser}  
      editUser={this.editUser}
      />
        </Col>
      </Row>
    </Container>
    </div>
  )
 }
}
export default App;
