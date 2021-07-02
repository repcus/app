import React, {Component} from 'react';
import {Table, Image} from 'react-bootstrap';

function showStars(rating) {
    let retVal = '';
    for(let i = 0; i < rating; i++){
        retVal += '';
    }
    return(retVal);
}

export class CarsList extends Component{
    state = {
        cars: []
    };

    async componentDidMount() {
        const response = await fetch('/api/CarsEntries');
        if (!response.ok) {
            throw new Error('HTTP error, status = ' + response.status);
        }
        const body = await response.json();
        this.setState({cars: body});
    }

    render(){
        const {cars} = this.state;
        return(
            <div>
                <h3>
                    Cars page
                </h3>
                <Table className="mt-4" striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Color</th>
                        <th>Engine</th>
                        <th>Car segment</th>
                        <th>Mileage</th>
                        <th>Production year</th>
                        <th>Rent price</th>
                        <th>Rented</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cars.map(car =>
                        <tr>
                            <td>{car.id}</td>
                            <td>{car.make}</td>
                            <td>{car.model}</td>
                            <td>{car.color}</td>
                            <td>{car.engine}</td>
                            <td>{car.carSegment}</td>
                            <td>{car.millage}</td>
                            <td>{car.productionYear}</td>
                            <td>{car.vechicalRegistracionNumber}</td>
                            <td>{car.rentPrice} PLN</td>
                            <td>
                                <input type="checkbox" value={car.isRented}/>
                            </td>
                            <td>
                                <Image src={showStars(car.rating)}></Image>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </Table>
            </div>
        )
    }
}