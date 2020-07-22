import React from 'react';
import { Form, Col } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { FormGroup, InputGroup, Label } from "reactstrap";
import "react-datepicker/dist/react-datepicker.css";
import './personalInfo.css'

class personalInfo extends React.Component {
    constructor() {
        super()
        this.state = {
            genders: ['Male', 'Female', 'Others'],
            default_date: new Date(),
        }

        this.handleDefault = this.handleDefault.bind(this);
    }


    handleDefault(date) {
        this.setState({ default_date: date });
        console.log(this.state.default_date)
    }

    render() {

        return (
            <div>
                <Form className="desktop-form">
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                placeholder="First name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Middle name</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                placeholder="Middle name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                placeholder="Last name" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Official email</Form.Label>
                            <Form.Control
                                size="sm"
                                type="email"
                                placeholder="Edit your official email here" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Personal email</Form.Label>
                            <Form.Control
                                size="sm"
                                type="email"
                                placeholder="Edit your personal email here" />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Label> Date of birth </Label>
                            <InputGroup >
                                <DatePicker
                                    selected={this.state.default_date}
                                    className="form-control-sm date-control"
                                    onChange={this.handleDefault}
                                    placeholder="mm/dd/yyyy"
                                    showMonthDropdown
                                    showYearDropdown
                                />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Gender</Form.Label>
                            <Form.Control size="sm" as="select">
                                <option>Select Gender</option>
                                {
                                    this.state.genders.map((gender, id) => {
                                        return <option key={id}> {gender} </option>;
                                    })}
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>

                        


                        

                    </Form.Row>
                </Form>

                <div className="mobile-form">
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="First name" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Middle name</Form.Label>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="Middle name" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="Last name" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Official email</Form.Label>
                                <Form.Control
                                    size="sm"
                                    type="email"
                                    placeholder="Edit your official email here" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Personal email</Form.Label>
                                <Form.Control
                                    size="sm"
                                    type="email"
                                    placeholder="Edit your personal email here" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col}>
                                <Label> Date of birth </Label>
                                <InputGroup >
                                    <DatePicker
                                        style={{width:'100% !important'}}
                                        selected={this.state.default_date}
                                        className="form-control form-control-sm"
                                        onChange={this.handleDefault}
                                        placeholder="mm/dd/yyyy"
                                        showMonthDropdown
                                        showYearDropdown
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Gender</Form.Label>
                                <Form.Control size="sm" as="select">
                                    <option>Select Gender</option>
                                    {
                                        this.state.genders.map((gender, id) => {
                                            return <option key={id}> {gender} </option>;
                                        })}
                                </Form.Control>
                            </Form.Group>

                        </Form.Row>
                    </Form>
                </div>

                <button className="btn btn-primary">Update </button>
            </div>
        )
    }

}
export default personalInfo