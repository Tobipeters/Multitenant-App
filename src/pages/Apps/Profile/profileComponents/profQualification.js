import React from "react";
import ProfessionalData from "../../../../dummyData/qualificationData";
import { Badge } from 'react-bootstrap'



class acadQualification extends React.Component {
  constructor() {
    super();
    this.state = {
      profs: ProfessionalData[0].profData,
    };
  }



  render() {
    const professionalHistory = this.state.profs.map((prof, id) => {
      return (
        <tbody>
          <tr key={id}>
            <th scope="row">{prof.id}</th>
            <td>{prof.institutionName}</td>
            <td>{prof.certificate}</td>
            <td>{prof.year}</td>
            <td>
              <Badge variant="success" className="mr-3 action-btn">Edit</Badge>
              <Badge variant="danger" className="action-btn">Delete</Badge>
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
            {professionalHistory}
          </table>
        </div>
        <button className="btn btn-primary add-btn">Add more</button>
      </div>
    );
  }
}
export default acadQualification;
