import React, {Component} from 'react';
import {Table, ButtonGroup, Button, Card} from "react-bootstrap";
import axios from "axios";

function checkUserrole(role){
    if(role === 1){
        return "employee";
    }else{
        return "customer";
    }
}


export class UsersList extends Component{
    state = {
        users: []
    };

    componentDidMount() {
        axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.get('/api/UserEntries')
            .then(response => response.data)
            .then((data) => {
                 this.setState({users: data});
             });
    }

    async remove(id) {
        console.log("deleted " + id);
        await fetch(`/api/UserEntries/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedUsers = [...this.state.users].filter(i => i.id !== id);
            this.setState({users: updatedUsers});
        });
    }

    render(){
        const {users} = this.state;

        return(
            <Card>
                <Card.Header>
                    <h3>Users page</h3>
                </Card.Header>
                <Card.Body>
                    <Table striped bordered hover variant="light">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>User's role</th>
                            <th>Email address</th>
                            <th>First name</th>
                            <th>Surname</th>
                            <th>Phone number</th>
                            <th> </th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map(user =>
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    <td>{checkUserrole(user.userrole)}</td>
                                    <td>{user.email}</td>
                                    <td>{user.nameofuser}</td>
                                    <td>{user.surrname}</td>
                                    <td>{user.phonenumber}</td>
                                    <td>
                                        <ButtonGroup>
                                            <Button className={"btn btn-primary"} href={"/User/UsersList/" + user.id}>Edit</Button>
                                            <Button className={"btn btn-danger"} onClick={() => this.remove(user.id)}>Delete</Button>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </Table>
                    <div className="float-left">
                        <Button className="btn btn-primary btn-lg" href={"/User/UsersList/new"}>Add a user</Button>
                    </div>
                </Card.Body>
            </Card>
        )
    }
}