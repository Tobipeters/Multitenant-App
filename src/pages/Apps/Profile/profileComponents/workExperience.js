import React from "react";
import WorkExData from "../../../../dummyData/qualificationData";

class acadQualification extends React.Component {
  constructor() {
    super();
    this.state = {
      works: WorkExData[0].workExData,
    };
  }
  render() {
    const workHistory = this.state.works.map((work, id) => {
      return (
        <tbody>
          <tr key={id}>
            <th scope="row">{work.id}</th>
            <td>{work.company}</td>
            <td>{work.position}</td>
            <td>{work.startDate}</td>
             <td>{work.endDate}</td>
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
                <th>Company</th>
                <th>Position</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </thead>
            {workHistory}
          </table>
        </div>
        <button className="btn btn-primary add-btn">Add more</button>
      </div>
    );
  }
}
export default acadQualification;
