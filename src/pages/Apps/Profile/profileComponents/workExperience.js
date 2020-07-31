import React from "react";
import WorkExData from "../../../../dummyData/qualificationData";
import { Badge, Form, InputGroup, FormControl } from 'react-bootstrap'
import WorkExperienceModal from '../../../Shared/appModal'

class acadQualification extends React.Component {
  constructor() {
    super();
    this.state = {
      works: WorkExData[0].workExData,
      modal_center: false,
      modal_add: false,
      selectDataId: '',
      modalData: '',
      workDataObject: {
        company: "",
        position: "",
        startDate: "",
        endDate: ""
      },
    };

    this.deleteTableData = this.deleteTableData.bind(this)
    this.editTableData = this.editTableData.bind(this)
    this.workExperienceModal = this.workExperienceModal.bind(this)
    this.closeEditModal = this.closeEditModal.bind(this)
    this.handleEditWorkExData = this.handleEditWorkExData.bind(this)
    this.submitEditedData = this.submitEditedData.bind(this)
    this.addTableData = this.addTableData.bind(this)
    this.addWorkExperienceModal = this.addWorkExperienceModal.bind(this)
    this.handleAddNew = this.handleAddNew.bind(this)
    this.submitWorkExData = this.submitWorkExData.bind(this)
    this.closeAddModal = this.closeAddModal.bind(this)
  }

  //function to delete table data(Work Experience)
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
      modalData: this.state.works[dataId],

      //setting default value for editing modal state
      editedDataObject: {
        company: this.state.works[dataId].company,
        position: this.state.works[dataId].position,
        startDate: this.state.works[dataId].startDate,
        endDate: this.state.works[dataId].endDate,
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
  workExperienceModal = () => {
    if (this.state.selectDataId !== null) {

      const editData = this.state.modalData
      return (
        <div className="modal-body">
          <Form>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text >Company</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="text"
                placeholder="Edit Company"
                name="company"
                defaultValue={editData.company}
                onChange={this.handleEditWorkExData}
              />
            </InputGroup>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text >Position</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="text"
                placeholder="Edit Position"
                name="position"
                defaultValue={editData.position}
                onChange={this.handleEditWorkExData}
              />
            </InputGroup>

            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text >Start Date</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="text"
                placeholder="Enter start date (month, year)"
                name="startDate"
                defaultValue={editData.startDate}
                onChange={this.handleEditWorkExData}
              />
            </InputGroup>

            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text >End Date</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="text"
                placeholder="Enter end date (month, year)"
                name="endDate"
                defaultValue={editData.endDate}
                onChange={this.handleEditWorkExData}
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

  //Function to handle input to edit professional qualification
  handleEditWorkExData(event) {
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
  addWorkExperienceModal = () => {
    return (
      <div className="modal-body">
        <Form>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text >Company</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="text"
              placeholder="Add Company"
              name="company"
              value={this.state.workDataObject.company}
              onChange={this.handleAddNew}
            />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text >Position</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="text"
              placeholder="Add Position"
              name="position"
              value={this.state.workDataObject.position}
              onChange={this.handleAddNew}
            />
          </InputGroup>

          <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text >Start Date</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="text"
              placeholder="Enter Start date (Month, Year)"
              name="startDate"
              value={this.state.workDataObject.startDate}
              onChange={this.handleAddNew}
            />
          </InputGroup>

          <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text >End Date</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="text"
              placeholder="Enter End date (Month, Year)"
              name="endDate"
              value={this.state.workDataObject.endDate}
              onChange={this.handleAddNew}
            />
          </InputGroup>
        </Form>
        <button className="btn btn-primary add-btn btn-add-new" onClick={this.submitWorkExData}>Add New</button>
      </div>
    )
  }

  //Function to handle input to add professional qualification 
  handleAddNew(event) {
    const value = event.target.value;
    const name = event.target.name
    this.setState(prevState => ({
      workDataObject: {
        ...prevState.workDataObject,
        [name]: value
      }
    })
      //,console.log(this.state.acadDataObject)
    );

  }

  //submit new professional qualification data
  submitWorkExData() {
    console.log(this.state.workDataObject)
  }



  render() {
    const workHistory = this.state.works.map((work, id) => {
      return (
        <tbody key={id}>
          <tr>
            <th scope="row">{work.id}</th>
            <td>{work.company}</td>
            <td>{work.position}</td>
            <td>{work.startDate}</td>
            <td>{work.endDate}</td>
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
                onClick={() => this.deleteTableData(this.state.works, id)}>
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
                <th>Company</th>
                <th>Position</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            {workHistory}
          </table>
        </div>
        <button 
        className="btn btn-primary add-btn"
        onClick={() => this.addTableData()}
        >Add more</button>

        {/* Work Experience modal for Adding work data start here */}
        <WorkExperienceModal
          openModal={this.state.modal_add}
          toggleModal={this.addTableData}
          backdrop={true}
          modalBody={this.addWorkExperienceModal()}
          modalHeader="Add Work Experience"
          closeModal={this.closeAddModal}
        />
        {/* Work Experience modal for Adding Professional data Ends here */}

        {/* Work Experience modal for Editing data start here */}
        <WorkExperienceModal
          openModal={this.state.modal_center}
          toggleModal={this.editTableData}
          backdrop="static"
          modalBody={this.workExperienceModal()}
          modalHeader="Edit Work Experience"
          closeModal={this.closeEditModal}
        />
        {/* Work Experience modal for Editing data ends here */}

      </div>
    );
  }
}
export default acadQualification;
