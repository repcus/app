import React, { Component } from 'react';
import {Button, Form, FormGroup, Card, Col, ButtonGroup} from 'react-bootstrap';
import axios from "axios";

export class UserEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: this.emptyUser
        };
        this.userChange = this.userChange.bind(this);
        this.userSubmit = this.userSubmit.bind(this);
    }

    emptyUser = {
        username: '',
        userrole: '',
        email: '',
        nameofuser: '',
        surrname: '',
        phonenumber: ''
    };

    componentDidMount() {
        axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        if (this.props.match.params.id !== 'new') {
            axios.get(`/api/UserEntries/${this.props.match.params.id}`)
                .then(response => response.data)
                .then((data) => {
                     this.setState({user: data});
                });
        }
    }

    userChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let user = {...this.state.user};
        user[name] = value;
        this.setState({user});
    }

    userSubmit = event => {
        axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        event.preventDefault();
        const user = this.state;
        axios.post("http://localhost:5432/api/UserEntries", user)
            .then(response => {
                if(response.data != null){
                    this.setState(this.emptyUser);
                    alert("User saved!");
                }
            });
    }

    render() {
        const {user} = this.state;
        const title = <h2>{user.id ? 'Edit user' : 'Add user'}</h2>;
        return (
            <Card>
                <Card.Header>
                    {title}
                </Card.Header>
                <Form id={"EditUser"} onSubmit={this.userSubmit}>
                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>
                                    Username
                                </Form.Label>
                                <Form.Control
                                    type="text" className="form-control" placeholder="username"
                                    aria-label="Username" aria-describedby="basic-addon1"
                                    name="username" id="username" value={user.username}
                                    onChange={this.userChange} required autoComplete="username"/>
                                <Form.Label>
                                    <br></br>
                                    User role
                                </Form.Label>
                                <Form.Control
                                    type="number" className="form-control" placeholder="role"
                                    aria-label="userrole "aria-describedby="basic-addon1"
                                    name="userrole" id="userrole" value={user.userrole || ''}
                                    onChange={this.userChange} required autoComplete="userrole"/>
                                <Form.Label>
                                    <br></br>
                                    Email
                                </Form.Label>
                                <Form.Control
                                    type="text" className="form-control" placeholder="email"
                                    aria-label="email" aria-describedby="basic-addon1"
                                    name="email" id="email" value={user.email || ''}
                                    onChange={this.userChange} required autoComplete="email"/>
                                <Form.Label>
                                    <br></br>
                                    Password
                                </Form.Label>
                                <Form.Control
                                    type="password" className="form-control" placeholder="password"
                                    aria-label="pass" aria-describedby="basic-addon1"
                                    name="pass" id="pass" value={user.pass || ''}
                                    onChange={this.userChange} required autoComplete="pass"/>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>
                                    First name
                                </Form.Label>
                                <Form.Control
                                    type="text" className="form-control" placeholder="nameofuser"
                                    aria-label="nameofuser" aria-describedby="basic-addon1"
                                    name="nameofuser" id="nameofuser" value={user.nameofuser || ''}
                                    onChange={this.userChange} required autoComplete="nameofuser"/>
                                <Form.Label>
                                    <br></br>
                                    Surname
                                </Form.Label>
                                <Form.Control
                                    type="text" className="form-control" placeholder="surname"
                                    aria-label="surrname" aria-describedby="basic-addon1"
                                    name="surrname" id="surrname" value={user.surrname || ''}
                                    onChange={this.userChange} required autoComplete="surrname"/>
                                <Form.Label>
                                    <br></br>
                                    Phone number
                                </Form.Label>
                                <Form.Control
                                    type="tel" className="form-control" placeholder="phonenumber"
                                    aria-label="phonenumber" aria-describedby="basic-addon1"
                                    name="phonenumber" id="phonenumber" value={user.phonenumber || ''}
                                    onChange={this.userChange} required autoComplete="phonenumber"/>
                            </Form.Group>
                        </Form.Row>
                    </Card.Body>
                <Card.Footer>
                    <FormGroup>
                        <ButtonGroup>
                            <Button className={"btn btn-primary"} type="submit">Save</Button>
                            <Button className={"btn btn-danger"} href="/UsersList">Cancel</Button>
                        </ButtonGroup>
                    </FormGroup>
                </Card.Footer>
                </Form>
        </Card>
        )
    }
}