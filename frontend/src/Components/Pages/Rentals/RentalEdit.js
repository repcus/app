import React, { Component } from 'react';
import { Button, Container, Form, FormGroup} from 'react-bootstrap';

export class RentalEdit extends Component {

    emptyItem = {
        rentDate: '',
        returnDate: '',
        isReturned: '',
    };

    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const car = await (await fetch(`/api/RentalsEntries/${this.props.match.params.id}`)).json();
            this.setState({item: car});
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;

        await fetch('/api/RentalsEntries' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/api/RentalsEntries/');
    }

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        const {item} = this.state;
        const title = <h2>{item.id ? 'Edit rental' : 'Add rental'}</h2>;

        return (<div>
            {title}
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Rent Date</span>
                        <input type="text" className="form-control" placeholder="city" aria-label="city"
                               aria-describedby="basic-addon1" name="city" id="city" value={item.city || ''}
                               onChange={this.handleChange} autoComplete="city"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Return Date</span>
                        <input type="text" className="form-control" placeholder="street" aria-label="street"
                               aria-describedby="basic-addon1" name="street" id="street" value={item.street || ''}
                               onChange={this.handleChange} autoComplete="street"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">is Returned</span>
                        <input type="text" className="form-control" placeholder="postcode" aria-label="email"
                               aria-describedby="basic-addon1" name="postcode" id="postcode" value={item.postcode || ''}
                               onChange={this.handleChange} autoComplete="postcode"/>
                    </div>
                    <FormGroup>
                        <Button className={"btn btn-primary"} type="submit">Save</Button>{' '}
                        <Button className={"btn btn-danger"} href="/AddressesList">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>)
    }
}
