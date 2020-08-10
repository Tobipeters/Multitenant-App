import React from 'react'
import AppHeader from '../../../Shared/appHeader'
import { Row, Col, Card, CardBody } from "reactstrap";
import { Alert } from 'react-bootstrap'
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Link } from 'react-router-dom'

//Dropzone for uploading user picture
import Dropzone from "react-dropzone";

import CreateUserModal from '../../../Shared/appModal'
import { Container } from 'react-bootstrap';

//list of all user data
import UserList from '../../../../dummyData/userList'

//Data table used
import { MDBDataTable } from "mdbreact";

//import jquery and datatable
const $ = require('jquery')
$.DataTable = require('datatables.net')

class Users extends React.Component {
    constructor() {
        super()



        this.state = {
            allUsers: [],
            modal_createUser: false,
            alert: false,
            selectedFiles: [],
            newUserData: {
                firstName: "",
                middleName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                address: "",
                country: "",
                state: "",
                city: "",
                picture: null
            }
        }

        this.toggleCreateUser = this.toggleCreateUser.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.createUserModalBody = this.createUserModalBody.bind(this)
        this.handleAcceptedFiles = this.handleAcceptedFiles.bind(this)
        this.handleNewUserInput = this.handleNewUserInput.bind(this)
        this.submitNewUserInput = this.submitNewUserInput.bind(this)
    }

    //Toggle modal function 
    toggleCreateUser() {
        this.setState(prevState => ({
            modal_createUser: !prevState.modal_createUser,
        }));
    }

    //Function to close create user modal
    closeModal() {
        this.setState(prevState => ({
            modal_createUser: !prevState.modal_createUser,
        }))
    }

    // Modal body to create new user 
    /**
     * Reactstrap from was used here, (for easy validation of data inputted)
     * avalidity-reacstrap-validation was used along side
     */
    createUserModalBody() {
        return (
            <Container className="py-3">
                {
                    this.state.alert === true ?
                        <Alert className="my-2 mx-auto d-block text-center" variant="danger">
                            Oops! Enter values in all form field
                        </Alert>
                        : null
                }
                <AvForm>
                    <Row>
                        <Col md={4} xs={12}>
                            <label>First Name</label>
                            <AvField
                                name="firstName"
                                type="text"
                                value={this.state.newUserData.firstName}
                                onChange={this.handleNewUserInput}
                                placeholder="Enter User First Name"
                                errorMessage="Enter user first name"
                                validate={{ required: { value: true } }}
                            />
                        </Col>
                        <Col className="px-md-0" md={4} xs={12}>
                            <label>Middle Name</label>
                            <AvField
                                name="middleName"
                                type="text"
                                value={this.state.newUserData.middleName}
                                onChange={this.handleNewUserInput}
                                placeholder="Enter User Middle Name"
                                errorMessage="Enter user middle name"
                                validate={{ required: { value: true } }}
                            />
                        </Col>
                        <Col md={4} xs={12}>
                            <label>Last Name</label>
                            <AvField
                                name="lastName"
                                type="text"
                                value={this.state.newUserData.lastName}
                                onChange={this.handleNewUserInput}
                                placeholder="Enter User Last Name"
                                errorMessage="Enter user last name"
                                validate={{ required: { value: true } }}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col md={3} xs={12}>
                            <label>Email</label>
                            <AvField
                                name="email"
                                type="email"
                                value={this.state.newUserData.email}
                                onChange={this.handleNewUserInput}
                                placeholder="Enter User Email"
                                errorMessage="Enter user email"
                                validate={{ required: { value: true } }}
                            />
                        </Col>
                        <Col className="px-md-0" md={3} xs={12}>
                            <label>Phone </label>
                            <AvField
                                name="phoneNumber"
                                type="tel"
                                value={this.state.newUserData.phoneNumber}
                                onChange={this.handleNewUserInput}
                                placeholder="Enter User Phone Number"
                                errorMessage="Enter user phone number"
                                validate={{ required: { tel: true } }}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <label>Address</label>
                            <AvField
                                name="address"
                                type="text"
                                value={this.state.newUserData.address}
                                onChange={this.handleNewUserInput}
                                placeholder="Enter User Address"
                                errorMessage="Enter user address"
                                validate={{ required: { value: true } }}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4} xs={12}>
                            <label>Country</label>
                            <AvField
                                name="country"
                                type="text"
                                value={this.state.newUserData.country}
                                onChange={this.handleNewUserInput}
                                placeholder="Enter User Country"
                                errorMessage="Enter user country"
                                validate={{ required: { value: true } }}
                            />
                        </Col>
                        <Col className="px-md-0" md={4} xs={12}>
                            <label>State</label>
                            <AvField
                                name="state"
                                type="text"
                                value={this.state.newUserData.state}
                                onChange={this.handleNewUserInput}
                                placeholder="Enter User State"
                                errorMessage="Enter user state"
                                validate={{ required: { value: true } }}
                            />
                        </Col>
                        <Col md={4} xs={12}>
                            <label>City</label>
                            <AvField
                                name="city"
                                type="text"
                                value={this.state.newUserData.city}
                                onChange={this.handleNewUserInput}
                                placeholder="Enter User City"
                                errorMessage="Enter user city"
                                validate={{ required: { value: true } }}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <label>Upload Profile Picture</label>
                            <Dropzone
                                onDrop={acceptedFiles =>
                                    this.handleAcceptedFiles(acceptedFiles)
                                }
                            >
                                {({ getRootProps, getInputProps }) => (
                                    <div className="dropzone">
                                        <div
                                            className="dz-message needsclick"
                                            {...getRootProps()}
                                        >
                                            <input {...getInputProps()} />
                                            <h3>Drop files here or click to upload.</h3>
                                        </div>
                                    </div>
                                )}
                            </Dropzone>
                            {/* preview image to upload here */}
                            <div
                                className="dropzone-previews mt-3"
                                id="file-previews"
                            >
                                {this.state.selectedFiles.map((f, i) => {
                                    return (
                                        <Card
                                            className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                            key={i + "-file"}
                                        >
                                            <div className="p-2">
                                                <Row className="align-items-center">
                                                    <Col className="col-auto">
                                                        <img
                                                            data-dz-thumbnail=""
                                                            height="80"
                                                            className="avatar-sm rounded bg-light"
                                                            alt={f.name}
                                                            src={f.preview}
                                                        />
                                                    </Col>
                                                    <Col>
                                                        <Link
                                                            to="#"
                                                            className="text-muted font-weight-bold"
                                                        >
                                                            {f.name}
                                                        </Link>
                                                        <p className="mb-0">
                                                            <strong>{f.formattedSize}</strong>
                                                        </p>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card>
                                    );
                                })}
                            </div>
                        </Col>
                    </Row>
                    <button
                        type="submit"
                        className="float-right btn btn-primary waves-effect my-2"
                        onClick={() => this.submitNewUserInput()}
                    >
                        Add New User
                    </button>
                </AvForm>
            </Container>
        )
    }
    /**
     * Event to handle all from new user inputted data 
     * aside picture file
     */
    handleNewUserInput(event) {
        const value = event.target.value
        const name = event.target.name

        this.setState(prevState => ({
            newUserData: {
                ...prevState.newUserData,
                [name]: value
            }
        }))
    }



    //function to handle file upload
    handleAcceptedFiles = files => {
        files.map(file =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
                formattedSize: this.formatBytes(file.size)
            })
        );
        this.setState(prevState => ({
            selectedFiles: files,
            newUserData: {
                ...prevState.newUserData,
                picture: files[0].name
            }
        }));
    }
    /**
    * Formats the size
    */
    formatBytes = (bytes, decimals = 2) => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    }

    // function to submit new user data 
    submitNewUserInput(event) {
        // event.preventDefault()
        // still need to confirm that all form field are filled
        if (this.state.newUserData.firstName === "" ||
            this.state.newUserData.middleName === "" ||
            this.state.newUserData.lastName === "" ||
            this.state.newUserData.email === "" ||
            this.state.newUserData.phoneNumber === "" ||
            this.state.newUserData.address === "" ||
            this.state.newUserData.country === "" ||
            this.state.newUserData.state === "" ||
            this.state.newUserData.city === "" ||
            this.state.newUserData.picture === null) {
            this.setState(prevState => ({
                alert: true
            }))
        }
        else {
            console.log(this.state.newUserData)
        }

    }

    componentDidMount() {
        this.$el = $(this.el);
        this.$el.DataTable(
            {
                data: UserList,
                columns: [
                    { data: 'id' },
                    { data: 'firstName' },
                    { data: 'middleName' },
                    { data: 'lastName' },
                    { data: 'email' },
                    { data: 'phone' },
                    { data: 'address' },
                    { data: 'country' },
                    { data: 'state' },
                    { data: 'city' },
                    { data: 'actions' }
                ]
            }
        )
    }

    componentWillUnmount() {
        this.$el.DataTable.destory()
    }



    render() {
        return (
            <div className="container-fluid">
                <AppHeader
                    data={"Users"}
                    breadcrumbMain={"User Management"}
                    breadcrumbSubMain={"Users"}
                    allMenu={'setting-menu-for-each-page-comes-in-here'}
                />

                <Card>
                    <CardBody>
                        <Row className="my-3">
                            <Col>
                                <h3 className="font-size-18">All Users</h3>
                            </Col>
                            <Col>
                                <button
                                    className="float-right btn btn-primary waves-effect"
                                    onClick={() => this.toggleCreateUser()}
                                >
                                    <i className="fa fa-plus mr-2" aria-hidden="true"></i>
                            Create User
                            </button>
                            </Col>
                        </Row>



                        {/* <MDBDataTable
                            displayEntries={false}
                            responsive
                            exportToCSV
                            hover
                            data={UserList} /> */}

                        <div>
                            <table className="display " width="100%" ref={el => this.el = el}>
                                <thead>
                                    <tr>
                                        <th>S/N</th>
                                        <th>First Name</th>
                                        <th>Middle Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Phone Number</th>
                                        <th>Address</th>
                                        <th>Country</th>
                                        <th>State</th>
                                        <th>City</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                    <th>S/N</th>
                                        <th>First Name</th>
                                        <th>Middle Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Phone Number</th>
                                        <th>Address</th>
                                        <th>Country</th>
                                        <th>State</th>
                                        <th>City</th>
                                        <th>Actions</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </CardBody>
                </Card>

                {/* Pass modal props here */}
                <CreateUserModal
                    openModal={this.state.modal_createUser}
                    toggleModal={this.toggleCreateUser}
                    backdrop={true}
                    modalHeader="Create New User"
                    modalBody={this.createUserModalBody()}
                    closeModal={this.closeModal}
                />

            </div>
        )
    }

}

export default Users;