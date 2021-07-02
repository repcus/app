import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

export class AddressesList extends Component{
    state = {
        addresses: []
    };

    async componentDidMount() {
        const response = await fetch('/api/AddressesEntries');
        if (!response.ok) {
            throw new Error('HTTP error, status = ' + response.status);
        }
        const body = await response.json();
        this.setState({addresses: body});
    }

    render(){
        const {addresses} = this.state;
        return(
            <div>
                <h3>
                    Addresses page
                </h3>
                <Table className="mt-4" striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>City</th>
                        <th>Street</th>
                        <th>Postal code</th>
                    </tr>
                    </thead>
                    <tbody>
                    {addresses.map(address =>
                        <tr>
                            <td>{address.id}</td>
                            <td>{address.city}</td>
                            <td>{address.street}</td>
                            <td>{address.postcode}</td>
                        </tr>
                    )}
                    </tbody>
                </Table>
            </div>
        )
    }
}