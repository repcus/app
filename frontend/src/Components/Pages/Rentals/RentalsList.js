import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

export class RentalsList extends Component{
    state = {
        rentals: []
    };

    async componentDidMount() {
        const response = await fetch('/api/RentalsEntries');
        if (!response.ok) {
            throw new Error('HTTP error, status = ' + response.status);
        }
        const body = await response.json();
        this.setState({rentals: body});
    }

    render(){
        const {rentals} = this.state;
        return(
            <div>
                <h3>
                    Rentals page
                </h3>
                <Table class="table table-hover">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Rent date</th>
                        <th>Return date</th>
                        <th>Returned</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rentals.map(rental =>
                        <tr>
                            <td>{rental.id}</td>
                            <td>{rental.rentDate}</td>
                            <td>{rental.returnDate}</td>
                            <input type="checkbox" value={rental.isReturned}/>
                        </tr>
                    )}
                    </tbody>
                </Table>
            </div>
        )
    }
}