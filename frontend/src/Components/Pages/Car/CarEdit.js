import React, { Component } from 'react';
import { Button, Container, Form, FormGroup} from 'react-bootstrap';

export class CarEdit extends Component {

    emptyItem = {
        make: '',
        model: '',
        mileage: '',
        rating: '',
        isRented: '',
        carSegment: '',
        vechicalRegistracionNumber: '',
        productionYear: '',
        rentPrice: '',
        color: '',
        engine: '',
    };

    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const car = await (await fetch(`/api/CarsEntries/${this.props.match.params.id}`)).json();
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

        await fetch('/api/CarsEntries' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/api/CarsEntries/');
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
        const title = <h2>{item.id ? 'Edit car' : 'Add car'}</h2>;

        return (<div>
            {title}
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">make</span>
                        <input type="text" className="form-control" placeholder="make" aria-label="make"
                               aria-describedby="basic-addon1" name="make" id="make" value={item.make || ''}
                               onChange={this.handleChange} autoComplete="make"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">model</span>
                        <input type="text" className="form-control" placeholder="model" aria-label="model"
                               aria-describedby="basic-addon1" name="model" id="model" value={item.model || ''}
                               onChange={this.handleChange} autoComplete="model"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">mileage</span>
                        <input type="number" className="form-control" placeholder="mileage" aria-label="mileage"
                               aria-describedby="basic-addon1" name="mileage" id="mileage" value={item.mileage || ''}
                               onChange={this.handleChange} autoComplete="mileage"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">rating</span>
                        <input type="number" className="form-control" placeholder="rating" aria-label="rating"
                               aria-describedby="basic-addon1" name="rating" id="rating" value={item.rating || ''}
                               onChange={this.handleChange} autoComplete="rating"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">isRented</span>
                        <input type="text" className="form-control" placeholder="isRented" aria-label="isRented"
                               aria-describedby="basic-addon1" name="isRented" id="isRented" value={item.isRented || ''}
                               onChange={this.handleChange} autoComplete="isRented"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">carSegment</span>
                        <input type="text" className="form-control" placeholder="carSegment" aria-label="carSegment"
                               aria-describedby="basic-addon1" name="carSegment" id="carSegment" value={item.carSegment || ''}
                               onChange={this.handleChange} autoComplete="carSegment"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">vechicalRegistracionNumber</span>
                        <input type="text" className="form-control" placeholder="vechicalRegistracionNumber"
                               aria-label="vechicalRegistracionNumber"
                               aria-describedby="basic-addon1" name="vechicalRegistracionNumber"
                               id="vechicalRegistracionNumber" value={item.vechicalRegistracionNumber || ''}
                               onChange={this.handleChange} autoComplete="vechicalRegistracionNumber"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">productionYear</span>
                        <input type="number" className="form-control" placeholder="productionYear" aria-label="productionYear"
                               aria-describedby="basic-addon1" name="productionYear" id="productionYear" value={item.productionYear || ''}
                               onChange={this.handleChange} autoComplete="productionYear"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">rentPrice</span>
                        <input type="number" className="form-control" placeholder="rentPrice" aria-label="rentPrice"
                               aria-describedby="basic-addon1" name="rentPrice" id="rentPrice" value={item.rentPrice || ''}
                               onChange={this.handleChange} autoComplete="rentPrice"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">color</span>
                        <input type="text" className="form-control" placeholder="color" aria-label="color"
                               aria-describedby="basic-addon1" name="color" id="color" value={item.color || ''}
                               onChange={this.handleChange} autoComplete="color"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">engine</span>
                        <input type="text" className="form-control" placeholder="engine" aria-label="engine"
                               aria-describedby="basic-addon1" name="engine" id="engine" value={item.engine || ''}
                               onChange={this.handleChange} autoComplete="engine"/>
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
