import React from "react";
import academicData from "../../../../dummyData/qualificationData";

class acadQualification extends React.Component {
  constructor() {
    super();
    this.state = {
      acads: academicData[0].acadData,
    };
  }
  render() {
    const academicHistory = this.state.acads.map((acad, id) => {
      return (
        <tbody>
          <tr key={id}>
            <th scope="row">{acad.id}</th>
            <td>{acad.institutionName}</td>
            <td>{acad.certificate}</td>
            <td>{acad.year}</td>
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
              </tr>
            </thead>
            {academicHistory}
          </table>
        </div>
        <button className="btn btn-primary add-btn">Add more</button>
      </div>
    );
  }
}
export default acadQualification;
