import React, { Component } from "react";
import { Row, Col, Card, CardBody, } from "reactstrap";
import { Form, Alert } from 'react-bootstrap'
import { Link } from "react-router-dom";

class ForgetPasswordPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                password: "",
            },
            confirmPassword: "",
            passwordMatch: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePassword = this.handlePassword.bind(this)
        this.comparePassword = this.comparePassword.bind(this)
    }


    handlePassword(event) {
        const value = event.target.value
        this.setState(prevState=>({
            ...prevState,
            data: {
                password: value
            }
        }))
        
    }

    comparePassword(event) {
        const confirmValue = event.target.value
        this.setState(prevState => ({
            confirmPassword: confirmValue
        }))
        
        if (confirmValue !== this.state.data.password) {
            this.setState(prevState => ({
                passwordMatch: true
            }))
        }else{
            this.setState(prevState => ({
                passwordMatch: false,
            }))
        }
        console.log(this.state.confirmPassword)
    }


    //submit email for resetting
    handleSubmit(event) {
        event.preventDefault()
        if(this.state.confirmPassword === this.state.data.password){
        console.log(this.state.data)
    }else{
        this.setState(prevState => ({
            passwordMatch: true
        }))
    }
    }

    render() {
        return (
            <React.Fragment>
                <div className="home-btn d-none d-sm-block">
                    <Link to="/" className="text-dark">
                        <i className="fas fa-home h2"></i>
                    </Link>
                </div>
                <div className="account-pages my-5 pt-5">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col md={8} lg={6} xl={5}>
                                <div className="position-relative">
                                    <Card className="overflow-hidden">
                                        <div className="bg-primary">
                                            <div className="text-primary text-center p-4">
                                                <h4 className="text-white font-size-20">
                                                    Reset New Password!
                                                 </h4>
                                                <p className="text-white-50">
                                                    Enter new password and proceed to login
                                                </p>
                                            </div>
                                        </div>
                                        <CardBody className="p-4">
                                            <div className="p-3">
                                                {this.state.passwordMatch ? <Alert className="text-center" variant="danger">
                                                    Oops! Password does not match
                                            </Alert> : null}

                                                <Form
                                                    className="form-horizontal mt-4"
                                                    onSubmit={this.handleSubmit}
                                                >
                                                    <div className="form-group">
                                                        <Form.Label>New Password</Form.Label>
                                                        <Form.Control
                                                            name="pasword"
                                                            placeholder="Enter New Password"
                                                            type="text"
                                                            value={this.state.data.password}
                                                            onChange={this.handlePassword}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <Form.Label>Confirm Password</Form.Label>
                                                        <Form.Control
                                                            name="password"
                                                            placeholder="Enter New Password that matches"
                                                            type="text"
                                                            value={this.state.confirmPassword}
                                                            onChange={this.comparePassword}
                                                            required

                                                        />
                                                    </div>
                                                    <Row className="form-group">
                                                        <Col className="text-right">
                                                            <button
                                                                className="btn btn-primary w-md waves-effect waves-light"
                                                                type="submit"
                                                            >
                                                                Proceed to Login
                                                            </button>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                            </div>
                                        </CardBody>
                                    </Card>
                                    <div className="mt-5 text-center">
                                        <p className="mb-0">
                                            © {new Date().getFullYear()} Multi-tenant.{" "}
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

// const mapStatetoProps = state => {
//   console.log(state.forgetSuccessMsg);
//   const { forgetError, forgetSuccessMsg } = state.ForgetPassword;
//   return { forgetError, forgetSuccessMsg };
// };

export default ForgetPasswordPage

