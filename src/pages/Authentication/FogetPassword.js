import React, { Component } from "react";
import { Row, Col, Card, CardBody, Alert } from "reactstrap";

import { Badge, Form, InputGroup, FormControl } from 'react-bootstrap'

//yup and formik for validation
import * as Yup from "yup";
import { Formik, Field, ErrorMessage } from "formik";

// Redux
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

// action
import { userForgetPassword } from "../../store/actions";

// import images
import logoSm from "../../assets/images/logo-sm.png";

const Schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email('Invalid email'),
});

class ForgetPasswordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: ""
      }

    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this)
    this.validateEmail = this.validateEmail.bind(this)
  }


  handleEmail(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      data: {
        [name]: value
      }
    })
  }

  //function to validate email
  validateEmail(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  }

  //submit email for resetting
  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state.data)
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
                          Having Trouble Logging In ?
                        </h4>
                        <p className="text-white-50">
                          Enter your email below and we would send a link to
                          reset your password.
                        </p>
                        {/* <Link to="/" className="logo logo-admin">
                          <img src={logoSm} height="24" alt="logo" />
                        </Link> */}
                      </div>
                    </div>

                    <CardBody className="p-4">
                      <div className="p-3">
                        {/* {this.props.forgetError && this.props.forgetError ? (
                          <Alert color="danger" style={{ marginTop: "13px" }}>
                            {this.props.forgetError}
                          </Alert>
                        ) : null}
                        {this.props.forgetSuccess ? (
                          <Alert color="success" style={{ marginTop: "13px" }}>
                            {this.props.forgetSuccess}
                          </Alert>
                        ) : null} */}
                        <Formik
                          validationSchema={Schema}
                          onSubmit={this.handleSubmit}
                          initialValues={{
                            email: ""
                          }}
                        >
                          {({
                            handleSubmit,
                            handleChange,
                            handleBlur,
                            values,
                            touched,
                            isValid,
                            errors,
                            isValidating
                          }) => (
                              <Form
                                className="form-horizontal mt-4"
                                onSubmit={this.handleSubmit}
                              >
                                <div className="form-group">
                                  <Form.Label>Email</Form.Label>
                                  <Field
                                    name="email"
                                    placeholder="Enter email to reset password"
                                    type="email"
                                    value={this.state.data.email}
                                    onChange={this.handleEmail}
                                    validate={this.validateEmail}
                                    required
                                    className={`form-control ${
                                      touched.email ? "is-invalid" : ""
                                      }`}
                                  />
                                  <ErrorMessage
                                    component="div"
                                    name="email"
                                    className="invalid-feedback"
                                  />
                                </div>
                                <Row className="form-group">
                                  <Col className="text-right">
                                    <button
                                      className="btn btn-primary w-md waves-effect waves-light"
                                      type="submit"
                                    >
                                      Reset
                              </button>
                                  </Col>
                                </Row>
                              </Form>
                            )}
                        </Formik>
                      </div>
                    </CardBody>
                  </Card>
                  <div className="mt-5 text-center">
                    <p>
                      Go back to{" "}
                      <Link
                        to="pages-login"
                        className="font-weight-medium text-primary"
                      >
                        Login
                      </Link>{" "}
                    </p>
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

