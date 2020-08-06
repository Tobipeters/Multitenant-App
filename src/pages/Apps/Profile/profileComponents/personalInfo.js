import React from "react";
import { Form, Col, Row, Badge } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { InputGroup, Label } from "reactstrap";
import "react-datepicker/dist/react-datepicker.css";

class personalInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      genders: ["Male", "Female", "Others"],
      personalFormObject: {
        firstName: "",
        middleName: "",
        lastName: "",
        officialEmail: "",
        personalEmail: "",
        dateOfBirth: new Date(),
        gender: "",
        address: "",
        phoneNumber: "",
        city: "",
        state: "",
        country: "",
        skills: []
      },
      allSkills: "",
      skillValues:"",
      //Error messgae for no skills entered
      noSkillsError: {
        label: 'Enter Skills Separated with comma *',
        display: 'none',
        class: 'errMsg'
      }
    };

    this.handleDefault = this.handleDefault.bind(this);
    //this.getSkillValue = this.getSkillValue.bind(this);
    this.handleSkillInput = this.handleSkillInput.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.deletSkill = this.deletSkill.bind(this);
    this.handleDataInput = this.handleDataInput.bind(this)
    this.submitPersonalInfo = this.submitPersonalInfo.bind(this)
  }

  //onchange handler for picking date
  handleDefault(date) {
    this.setState(prevState => ({
      personalFormObject: {
        ...prevState.personalFormObject,
        dateOfBirth: date,
      }
    }));
  }

  //onchange handler for adding skills 
  handleSkillInput(e) {
    this.setState({
      skillValues: e.target.value,
    });
  }


  //function to add new skills to field input field
  handleAdd() {
    console.log(this.state.skillValues)
    if (this.state.skillValues === "") {
      this.setState(prevState => ({
        noSkillsError: {
          ...prevState.noSkillsError,
          display: 'block'
        }
      }))
      //console.log(`if statement worked`)
    }
    else {
      const commaSeparatedSkills = this.state.skillValues.split(',')
      this.setState((prevState) => ({
        noSkillsError: {
          ...prevState.noSkillsError,
          display: 'none'
        },
        personalFormObject: {
          ...prevState.personalFormObject,
          skills: [...prevState.personalFormObject.skills, ...commaSeparatedSkills]
        },
        skillValues: "",
      }))

    }
  }

  deletSkill(id) {
    //Skills duplicaated array
    const updatedSkills = [...this.state.personalFormObject.skills];
    updatedSkills.splice(id, 1);
    this.setState((prevState) => ({
      personalFormObject: {
        ...prevState.personalFormObject,
        skills: updatedSkills
      },

    }));
  }


  //onchange handler for text input in the personal form data
  //except date and skills (with different handler)
  handleDataInput(event) {
    const value = event.target.value
    const name = event.target.name
    this.setState(prevState => ({
      personalFormObject: {
        ...prevState.personalFormObject,
        [name]: value
      }
    }))
  }

  submitPersonalInfo() {
    console.log(this.state.personalFormObject)
  }


  render() {
    return (
      <div>
        <Form className="desktop-form">
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>First name</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="First name"
                name="firstName"
                value={this.state.personalFormObject.firstName}
                onChange={this.handleDataInput} />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Middle name</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Middle name"
                name="middleName"
                value={this.state.personalFormObject.middleName}
                onChange={this.handleDataInput} />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Last name</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Last name"
                name="lastName"
                value={this.state.personalFormObject.lastName}
                onChange={this.handleDataInput} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} xs={5}>
              <Form.Label>Official email</Form.Label>
              <Form.Control
                size="sm"
                type="email"
                placeholder="Edit your official email here"
                name="officialEmail"
                value={this.state.personalFormObject.officialEmail}
                onChange={this.handleDataInput}
              />
            </Form.Group>

            <Form.Group as={Col} xs={5}>
              <Form.Label>Personal email</Form.Label>
              <Form.Control
                size="sm"
                type="email"
                placeholder="Edit your personal email here"
                name="personalEmail"
                value={this.state.personalFormObject.personalEmail}
                onChange={this.handleDataInput}
              />
            </Form.Group>


            <Form.Group as={Col}>
              <Form.Label>Gender</Form.Label>
              <Form.Control
                size="sm"
                as="select"
                name="gender"
                value={this.state.personalFormObject.gender}
                onChange={this.handleDataInput}
              >
                <option>Select Gender</option>
                {this.state.genders.map((gender, id) => {
                  return <option key={id}> {gender} </option>;
                })}
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Label> Date of birth </Label>
              <InputGroup>
                <DatePicker
                  selected={this.state.personalFormObject.dateOfBirth}
                  className="form-control-sm date-control"
                  onChange={this.handleDefault}
                  placeholder="mm/dd/yyyy"
                  showMonthDropdown
                  showYearDropdown
                />
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                size="sm"
                type="number"
                placeholder="Phone Number"
                name="phoneNumber"
                value={this.state.personalFormObject.phoneNumber}
                onChange={this.handleDataInput} />
            </Form.Group>

            <Form.Group as={Col} xs={6}>
              <Form.Label>Address</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Address"
                name="address"
                value={this.state.personalFormObject.address}
                onChange={this.handleDataInput} />
            </Form.Group>

          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Country</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Country"
                name="country"
                value={this.state.personalFormObject.country}
                onChange={this.handleDataInput} />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>State</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="State"
                name="state"
                value={this.state.personalFormObject.state}
                onChange={this.handleDataInput} />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>City</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="City"
                name="city"
                value={this.state.personalFormObject.city}
                onChange={this.handleDataInput} />
            </Form.Group>
          </Form.Row>

          <Row>
            <div className="col col-lg-4 col-md-4 col-sm-12">
              <Form.Label>
                Skills &nbsp;
                <small>(Separated with comma)</small>
              </Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Enter Skills (Separated with comma)"
                value={this.state.skillValues}
                onChange={this.handleSkillInput}
              />
            </div>
            <div className="add-btn-container">
              <button
                type="button"
                className="btn btn-primary btn-sm add-skill"
                onClick={this.handleAdd}
              >
                Add
              </button>
            </div>
          </Row>

          <small className={this.state.noSkillsError.class} style={{ display: this.state.noSkillsError.display }}>
            {this.state.noSkillsError.label}
          </small>

          <Row>
            <div className="col col-lg-4 col-md-4 col-sm-12">
              {this.state.personalFormObject.skills.map((skill, id) => {
                return (
                  // <div className="mt-1 mb-1 mr-1">
                  <Badge className="mr-2 mb-2 mr-1 ml-1" pill variant="info" key={id}>
                    {skill}
                    <i
                      onClick={() => this.deletSkill(id)}
                      className="fa fa-times ml-2 del-skill"
                      aria-hidden="true"
                    ></i>
                  </Badge>
                  // </div>
                );
              })}
            </div>
          </Row>
        </Form>
        <hr />
        <button
          className="btn btn-primary add-btn"
          onClick={this.submitPersonalInfo} >
          Save
          </button>

        {/*   Mobile form   */}
      </div>
    );
  }
}
export default personalInfo;
