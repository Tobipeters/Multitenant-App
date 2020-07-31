import React from "react";
import ProfessionalData from "../../../../dummyData/qualificationData";
import ProfessionalModal from '../../../Shared/appModal'
import { Badge, Form, InputGroup, FormControl } from 'react-bootstrap'


class acadQualification extends React.Component {
  constructor() {
    super();
    this.state = {
      profs: ProfessionalData[0].profData,
      modal_center: false,
      modal_add: false,
      selectDataId: '',
      modalData: '',
      profDataObject: {
        institution: "",
        certification: "",
        year: ""
      },
    };


    this.deleteTableData = this.deleteTableData.bind(this)
    this.closeEditModal = this.closeEditModal.bind(this)
    this.editTableData = this.editTableData.bind(this)
    this.handleEditProfessionalData = this.handleEditProfessionalData.bind(this)
    this.submitEditedData = this.submitEditedData.bind(this)
    this.addTableData = this.addTableData.bind(this)
    this.closeAddModal = this.closeAddModal.bind(this)
    this.handleAddNew = this.handleAddNew.bind(this)
    this.submitProfessionalData = this.submitProfessionalData.bind(this)
  }

  //function to delete table data(Profession qualification)
  deleteTableData(tableArray, dataId) {
    tableArray.splice(dataId, 1)
    this.setState(prevState => ({
      ...prevState,
      tableArray: tableArray
    }))
  }

  /**
   * Below is the functions that triggers 
   * edit modal, 
   * close modal, 
   * input form for modal body
   * handle edited modal data and 
   * submit modal data
   */

  //Function to Edit professional qualification in the modal form
  editTableData(dataId) {
    //The if function trigger modal for editing academic data 
    this.setState(prevState => ({
      modal_center: !prevState.modal_center,
      selectDataId: dataId,
      modalData: this.state.profs[dataId],

      //setting default value for editing modal state
      editedDataObject: {
        institution: this.state.profs[dataId].institution,
        certification: this.state.profs[dataId].certification,
        year: this.state.profs[dataId].year
      },
    }));
  }

  //Function to close edit professional modal
  closeEditModal() {
    this.setState(prevState => ({
      modal_center: !prevState.modal_center,

    }))
  }


 

  //input form for Editing data in the modal body
  professionalQualificationModal = () => {
    const editData = this.state.modalData
    if (this.state.selectDataId !== null) {
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
                onChange={this.handleEditProfessionalData}
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
                onChange={this.handleEditProfessionalData}
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
                onChange={this.handleEditProfessionalData}
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
      
    }else{
      editData = null
    }
  
  }

  //Function to handle input to edit professional qualification
  handleEditProfessionalData(event) {
    const value = event.target.value
    const name = event.target.name

    this.setState(prevState => ({
      editedDataObject: {
        ...prevState.editedDataObject,
        [name]: value
      }
    })
    );
  }

  //submit edited professional qualification data
  submitEditedData() {
    console.log(this.state.editedDataObject)
  }


  //Function to trigger modal for Adding more professional qualification
  addTableData() {
    this.setState(prevState => ({
      modal_add: !prevState.modal_add,
    }));
  }

  //Function to close add professional modal
  closeAddModal() {
    this.setState(prevState => ({
      modal_add: !prevState.modal_add,
    }))
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
              value={this.state.profDataObject.institution}
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
              value={this.state.profDataObject.certification}
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
              value={this.state.profDataObject.year}
              onChange={this.handleAddNew}
            />
          </InputGroup>
        </Form>
        <button className="btn btn-primary add-btn btn-add-new" onClick={this.submitProfessionalData}>Add New</button>
      </div>
    )
  }

  //Function to handle input to add professional qualification 
  handleAddNew(event) {
    const value = event.target.value;
    const name = event.target.name
    this.setState(prevState => ({
      profDataObject: {
        ...prevState.profDataObject,
        [name]: value
      }
    })
      //,console.log(this.state.acadDataObject)
    );

  }

  //submit new professional qualification data
  submitProfessionalData() {
    console.log(this.state.profDataObject)
  }





  render() {
    const professionalHistory = this.state.profs.map((prof, id) => {
      return (
        <tbody key={id}>
          <tr >
            <th scope="row">{prof.id}</th>
            <td>{prof.institution}</td>
            <td>{prof.certification}</td>
            <td>{prof.year}</td>
            <td>
              <Badge
                variant="success"
                className="mr-3 action-btn"
                onClick={() => this.editTableData(id)}>
                Edit
                </Badge>
              <Badge
                variant="danger"
                className="action-btn"
                onClick={() => this.deleteTableData(this.state.profs, id)}>
                Delete
                </Badge>
            </td>
          </tr>
        </tbody>
      );
    });
    return (
      <div className="acad-container">
        <div className="table-responsive">
          <table className="table mb-0 data-table">
            <thead className="thead-light">
              <tr>
                <th>S/N</th>
                <th>Institution</th>
                <th>Certificate</th>
                <th>Year</th>
                <th>Actions</th>
              </tr>
            </thead>
            {professionalHistory}
          </table>
        </div>
        <button
          className="btn btn-primary add-btn"
          onClick={() => this.addTableData()}>
          Add more
          </button>

        {/* Academic modal for Adding Professional data start here */}
        <ProfessionalModal
          openModal={this.state.modal_add}
          toggleModal={this.addTableData}
          backdrop={true}
          modalBody={this.addAcademicQualificationModal()}
          modalHeader="Add Professional Qualification"
          closeModal={this.closeAddModal}
        />
        {/* Academic modal for Adding Professional data Ends here */}

        {/* Academic modal for Editing data start here */}
        <ProfessionalModal
          openModal={this.state.modal_center}
          toggleModal={this.editTableData}
          backdrop="static"
          modalBody={this.professionalQualificationModal()}
          modalHeader="Edit Professional Qualification"
          closeModal={this.closeEditModal}
        />
        {/* Academic modal for Editing data ends here */}


      </div>
    );
  }
}
export default acadQualification;
