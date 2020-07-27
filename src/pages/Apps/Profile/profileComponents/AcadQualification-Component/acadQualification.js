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
      modal_add:false,
      selectDataId: '',
      modalData: '',
      acadDataObject: {
        institutionName: "",
        Certification: "",
        year: ""
      },
    };

    this.editTableData = this.editTableData.bind(this)
    this.addTableData = this.addTableData.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.deleteTableData = this.deleteTableData.bind(this)
    this.academicQualificationModal = this.academicQualificationModal.bind(this)
  }


  editTableData(dataId) {
    //The if function trigger modal for editing academic data 
      this.setState(prevState => ({
        modal_center: !prevState.modal_center,
        selectDataId: dataId,
        modalData: this.state.acads[dataId]
      }));
    
  
  }

  addTableData(){
    this.setState(prevState => ({
      modal_add: !prevState.modal_add,
    }));
  }

  closeModal() {
    this.setState(prevState => ({
      modal_center: !prevState.modal_center,
    }))
  }

  deleteTableData(tableArray, dataId) {
    tableArray.splice(dataId, 1)
    this.setState(prevState => ({
      ...prevState,
      tableArray: tableArray
    }))
  }


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
                defaultValue={editData.institutionName}
              />
            </InputGroup>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text >Certification</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="text"
                placeholder="Edit Certification"
                defaultValue={editData.certificate}
              />
            </InputGroup>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text >Year</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="number"
                placeholder="Edit Year"
                defaultValue={editData.year}
              />
            </InputGroup>
          </Form>
          <button className="btn btn-primary add-btn">Save changes</button>
        </div>
      )
    }
  }


  render() {
    // const academicModal = this.academicQualificationModal()
    const academicHistory = this.state.acads.map((acad, id) => {
      return (
        <tbody key={id}>
          <tr >
            <th scope="row">{id + 1}</th>
            <td>{acad.institutionName}</td>
            <td>{acad.certificate}</td>
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
      <div className="acad-container">
        <div className="table-responsive">
          <table className="table mb-0">
            <thead className="thead-light">
              <tr>
                <th>S/N</th>
                <th>Institution</th>
                <th>Certificate</th>
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
          modalBody="Add Academic Qualification of the body"
          modalHeader="Add Academic Qualification"
          closeModal={this.closeModal}
        />
        {/* Academic modal for Adding Academic data Ends here */}


        {/* Academic modal for Edit data */}
        <AcademicModal
          openModal={this.state.modal_center}
          toggleModal={this.editTableData}
          modalBody={this.academicQualificationModal()}
          modalHeader="Edit Academic Qualification"
          closeModal={this.closeModal}
        />

      </div>
    );
  }
}
export default acadQualification;
