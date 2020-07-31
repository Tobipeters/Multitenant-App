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

      allSkills:"",
      personalFormObject:{
        firstName:"",
        middleName:"",
        lastName:"",
        officialEmail:"",
        personalEmail:"",
        dateOfBirth:new Date(),
        gender:"",
        skills:[]
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
    this.setState(prevState =>({ 
      personalFormObject:{
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
    const commaSeparatedSkills = this.state.skillValues.split(',')
    if (this.state.skillValues !== "") {
      this.setState((prevState) => ({
        personalFormObject:{
          ...prevState.personalFormObject,
          skills:[...prevState.personalFormObject.skills, ...commaSeparatedSkills]
        },
        skillValues: "",
      }))
    }
  }

  deletSkill(id) {
    //Skills duplicaated array
    const updatedSkills = [...this.state.personalFormObject.skills];
    updatedSkills.splice(id, 1);
    console.log(updatedSkills);
    this.setState((prevState) => ({
      personalFormObject:{
        ...prevState.personalFormObject,
        skills:updatedSkills
      },
    
    }));
  }


  //onchange handler for text input in the personal form data
  //except date and skills (with different handler)
  handleDataInput(event){
    const value = event.target.value
    const name = event.target.name
    this.setState(prevState =>({
      personalFormObject:{
        ...prevState.personalFormObject,
          [name]:value
      }
    }), console.log(this.state.personalFormObject))
  }

  submitPersonalInfo(){
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
              onChange={this.handleDataInput}/>
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
            <Form.Group as={Col}>
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

            <Form.Group as={Col}>
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

          <Row>
            <div className="col col-lg-4 col-md-4 col-sm-12">
              <Form.Label>
                Enter Skills 
                <small>(Separated with comma)</small>
                </Form.Label>
              <Form.Control
                id="mySkill"
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
