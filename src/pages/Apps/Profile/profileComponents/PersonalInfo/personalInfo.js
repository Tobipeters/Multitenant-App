import React from "react";
import { Form, Col, Row, Badge } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { InputGroup, Label } from "reactstrap";
import "react-datepicker/dist/react-datepicker.css";
import "./personalInfo.css";

class personalInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      genders: ["Male", "Female", "Others"],
      default_date: new Date(),
      skillValues: "",
      allSkills: [],
    };

    this.handleDefault = this.handleDefault.bind(this);
    //this.getSkillValue = this.getSkillValue.bind(this);
    this.handleSkillInput = this.handleSkillInput.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.deletSkill = this.deletSkill.bind(this);
  }

  handleDefault(date) {
    this.setState({ default_date: date });
  }

  handleSkillInput(e) {
    const getValue = e.target.value;
    this.setState({
      skillValues: e.target.value,
    });
  }

  handleAdd() {
    const mySkills = [];
    if (this.state.skillValues !== "") {
      mySkills.push(this.state.skillValues);
      this.setState((prevState) => ({
        allSkills: [...prevState.allSkills, mySkills],
        skillValues: "",
      }));
    }
  }

  deletSkill(id) {
    //Skills duplicaated array
    const updatedSkills = [...this.state.allSkills];
    updatedSkills.splice(id, 1);
    console.log(updatedSkills);
    this.setState((prevState) => ({
      ...prevState,
      allSkills: updatedSkills,
    }));
  }

  // getSkillValue(e, code){

  //     if(code ===188){
  //         console.log('I am working')
  //         if(this.value.length < 2){
  //             console.log('Enter more than 2 character')
  //         }else{
  //             const enteredValue = this.value.subString(0, this.value.length - 1);
  //             console.log(enteredValue)
  //         }
  //     }

  // }

  render() {
    return (
      <div>
        <Form className="desktop-form">
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>First name</Form.Label>
              <Form.Control size="sm" type="text" placeholder="First name" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Middle name</Form.Label>
              <Form.Control size="sm" type="text" placeholder="Middle name" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Last name</Form.Label>
              <Form.Control size="sm" type="text" placeholder="Last name" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Official email</Form.Label>
              <Form.Control
                size="sm"
                type="email"
                placeholder="Edit your official email here"
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Personal email</Form.Label>
              <Form.Control
                size="sm"
                type="email"
                placeholder="Edit your personal email here"
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Label> Date of birth </Label>
              <InputGroup>
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
                {this.state.genders.map((gender, id) => {
                  return <option key={id}> {gender} </option>;
                })}
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Row>
            <div className="col col-lg-4 col-md-4 col-sm-12">
              <Form.Label>Enter Skills</Form.Label>
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
              {this.state.allSkills.map((skill, id) => {
                return (
                  // <div className="mt-1 mb-1 mr-1">
                  <Badge className="mr-2 mb-2 mr-1 ml-1" pill variant="info">
                    {skill}
                    <i
                      onClick={() => this.deletSkill(id)}
                      class="fa fa-times ml-2 del-skill"
                      aria-hidden="true"
                    ></i>
                  </Badge>
                  // </div>
                );
              })}
            </div>
          </Row>
        </Form>
        <button className="btn btn-primary add-btn">Save</button>

        {/*   Mobile form   */}
      </div>
    );
  }
}
export default personalInfo;
