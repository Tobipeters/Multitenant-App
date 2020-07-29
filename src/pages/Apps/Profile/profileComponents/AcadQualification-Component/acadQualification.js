import React from "react";
import academicData from "../../../../../dummyData/qualificationData";
import { Badge, Form, InputGroup, FormControl } from 'react-bootstrap'
import { Modal } from "reactstrap"
import AcademicModal from "./acadModal";

class acadQualification extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      acads: academicData[0].acadData,
      modal_center: false,
      modal_add: false,
      selectDataId: '',
      modalData: '',
      acadDataObject: {
        institution: "",
        certification: "",
        course: "",
        year: ""
      },
     
    };

    this.editTableData = this.editTableData.bind(this)
    this.addTableData = this.addTableData.bind(this)
    this.closeEditModal = this.closeEditModal.bind(this)
    this.closeAddModal = this.closeAddModal.bind(this)
    this.deleteTableData = this.deleteTableData.bind(this)
    this.academicQualificationModal = this.academicQualificationModal.bind(this)
    this.addAcademicQualificationModal = this.addAcademicQualificationModal.bind(this)
    this.handleAddNew = this.handleAddNew.bind(this)
    this.handleEditAcademicData = this.handleEditAcademicData.bind(this)
    this.submitAcademicData = this.submitAcademicData.bind(this)
    this.submitEditedData = this.submitEditedData.bind(this)
  }


  //Function to Edit academic qualification in the modal form
  editTableData(dataId) {
    //The if function trigger modal for editing academic data 
    this.setState(prevState => ({
      modal_center: !prevState.modal_center,
      selectDataId: dataId,
      modalData: this.state.acads[dataId],

      //setting default value for editing modal state

      editedDataObject: {
        institution: this.state.acads[dataId].institution,
        certification: this.state.acads[dataId].certification,
        course: this.state.acads[dataId].course,
        year: this.state.acads[dataId].year
      },
    }));


  }

  //Function to trigger modal for Adding more academic qualification
  addTableData() {
    this.setState(prevState => ({
      modal_add: !prevState.modal_add,
    }));
  }

  //Function to close edit academic modal
  closeEditModal() {
    this.setState(prevState => ({
      modal_center: !prevState.modal_center,
    }))
  }

  //Function to close add academic modal
  closeAddModal() {
    this.setState(prevState => ({
      modal_add: !prevState.modal_add,
    }))
  }

  //function to delete table data(Academic qualification)
  deleteTableData(tableArray, dataId) {
    tableArray.splice(dataId, 1)
    this.setState(prevState => ({
      ...prevState,
      tableArray: tableArray
    }))
  }

  //input form for Editing data in the modal body
  academicQualificationModal = () => {
    

    if (this.state.selectDataId !== null) {
      const editData = this.state.modalData
      return (
        <div className="modal-body">
          <Form>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text >Institution</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="text"
                placeholder="Edit Institution"
                name="institution"
                defaultValue={editData.institution}
                onChange={this.handleEditAcademicData}
              />
            </InputGroup>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text >Certification</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="text"
                placeholder="Edit Certification"
                name="certification"
                defaultValue={editData.certification}
                onChange={this.handleEditAcademicData}
              />
            </InputGroup>

            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text >Course</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="text"
                placeholder="Edit Course"
                name="course"
                defaultValue={editData.course}
                onChange={this.handleEditAcademicData}
              />
            </InputGroup>

            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text >Year</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="number"
                placeholder="Edit Year"
                name="year"
                defaultValue={editData.year}
                onChange={this.handleEditAcademicData}
              />
            </InputGroup>
          </Form>
          <button
            className="btn btn-primary add-btn"
            onClick={this.submitEditedData}>
            Save changes
            </button>
        </div>
      )
    }
  }

  //input form for Adding data in the modal body
  addAcademicQualificationModal = () => {
    return (
      <div className="modal-body">
        <Form>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text >Institution</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="text"
              placeholder="Add Institution"
              name="institution"
              value={this.state.acadDataObject.institution}
              onChange={this.handleAddNew}
            />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text >Certification</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="text"
              placeholder="Add Certification"
              name="certification"
              value={this.state.acadDataObject.certification}
              onChange={this.handleAddNew}
            />
          </InputGroup>

          <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text >Course</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="text"
              placeholder="Add Course"
              name="course"
              value={this.state.acadDataObject.course}
              onChange={this.handleAddNew}
            />
          </InputGroup>

          <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text >Year</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="number"
              placeholder="Add Year"
              name="year"
              value={this.state.acadDataObject.year}
              onChange={this.handleAddNew}
            />
          </InputGroup>
        </Form>
        <button className="btn btn-primary add-btn btn-add-new" onClick={this.submitAcademicData}>Add New</button>
      </div>
    )
  }

  //Function to handle input to add academic qualification 
  handleAddNew(event) {
    const value = event.target.value;
    const name = event.target.name
    console.log(value)
    this.setState(prevState => ({
      acadDataObject: {
        ...prevState.acadDataObject,
        [name]: value
      }
    })
      //,console.log(this.state.acadDataObject)
    );

  }

  //Function to handle input to edit academic qualification
  handleEditAcademicData(event) {
    const value = event.target.value
    const name = event.target.name

    this.setState(prevState => ({
      editedDataObject: {
        ...prevState.editedDataObject,
        [name]: value
      }
    })
      // , console.log(this.state.editedDataObject)
    );
  }

  //submit edited academic qualification data
  submitEditedData() {
    console.log(this.state.editedDataObject)
  }

  //submit new academic qualification data
  submitAcademicData() {
    console.log(this.state.acadDataObject)
  }


  render() {

    // functions for looping through the academic qualication in the table
    const academicHistory = this.state.acads.map((acad, id) => {
      return (
        <tbody key={id}>
          <tr >
            <th scope="row">{id + 1}</th>
            <td>{acad.institution}</td>
            <td>{acad.certification}</td>
            <td>{acad.course}</td>
            <td>{acad.year}</td>
            <td>
              <Badge
                variant="success"
                className="mr-3 action-btn"
                onClick={() => this.editTableData(id)}
              >
                Edit
                </Badge>

              <Badge
                variant="danger"
                className="action-btn"
                onClick={() => this.deleteTableData(this.state.acads, id)}
              >
                Delete
              </Badge>
            </td>
          </tr>
        </tbody>
      );
    });

    return (
      // Looping through all Academic Qualifications
      <div className="acad-container">
        <div className="table-responsive">
          <table className="table mb-0 data-table">
            <thead className="thead-light">
              <tr>
                <th>S/N</th>
                <th>Institution</th>
                <th>Certificate</th>
                <th>Course</th>
                <th>Year</th>
                <th>Actions</th>
              </tr>
            </thead>
            {academicHistory}
          </table>
        </div>
        <button
          className="btn btn-primary add-btn"
        onClick={()=>this.addTableData()}
        >
          Add more
        </button>

        {/* Academic modal for Adding Academic data start here */}
        <AcademicModal
          openModal={this.state.modal_add}
          toggleModal={this.addTableData}
          modalBody={this.addAcademicQualificationModal()}
          modalHeader="Add Academic Qualification"
          closeModal={this.closeAddModal}
        />
        {/* Academic modal for Adding Academic data Ends here */}


        {/* Academic modal for Editing data start here */}
        <AcademicModal
          openModal={this.state.modal_center}
          toggleModal={this.editTableData}
          modalBody={this.academicQualificationModal()}
          modalHeader="Edit Academic Qualification"
          closeModal={this.closeEditModal}
        />
        {/* Academic modal for Editing data ends here */}

      </div>
    );
  }
}
export default acadQualification;
