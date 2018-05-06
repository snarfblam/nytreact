import React from 'react';
import { Card, CardBody, CardHead } from '../Card';
import { Form, Input, Select } from '../Form';
import Col from '../Col';
import Container from '../Container';
import Row from '../Row';
// import * as API from '../../NytApi';

class SearchPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: "",
            numRecords: 5,
            startYear: "",
            endYear: "",
        }

        this.handleChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            });
        };

        this.onSubmit = (event) => {
            event.preventDefault();
            // API.searchArticles(this.state.searchTerm, this.state.numRecords, this.state.startYear, this.state.endYear)
            //     .then(result => {
            //         console.log(result);
            //     });
            this.props.onSearch(this.state);
        }
    }


    render() {
        return (
            <Container>
                <Row>
                    <Col size='12'>
                        <Card>
                            <CardHead>Search NY Times</CardHead>
                            <CardBody>
                                <Form>
                                    <Input
                                        name='searchTerm'
                                        label='Search Term:'
                                        onChange={this.handleChange}
                                        value={this.state.searchTerm}
                                    />
                                    <Select
                                        name='numRecords'
                                        label='Number of Records to Retrieve:'
                                        onChange={this.handleChange}
                                        value={this.state.numRecords} >
                                        <option>1</option>
                                        <option>5</option>
                                        <option>10</option>
                                    </Select>
                                    <Input
                                        name='startYear'
                                        label='Start Year (optional):'
                                        onChange={this.handleChange}
                                        value={this.state.startYear}
                                    />
                                    <Input
                                        name='endYear'
                                        label='End Year (optional):'
                                        onChange={this.handleChange}
                                        value={this.state.endYear}
                                    />
                                    <button className='btn btn-primary' type='submit' onClick={this.onSubmit}>Search</button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
            </Row>
            </Container>
        );
    }
}

export default SearchPanel;