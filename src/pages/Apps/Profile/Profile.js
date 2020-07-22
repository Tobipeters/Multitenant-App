import React from 'react';
import './Profile.css';
import ProfileAvatar from '../../../assets/images/user-avatar.jpg';
import { Link } from 'react-router-dom';
import { Badge, Tabs, Tab } from 'react-bootstrap';
import PersonalInfo from '../../../newComponents/profilComponents/PersonalInfo/personalInfo'
import UserInfo from '../../../dummyData/userInformation'



class Profile extends React.Component {
    constructor() {
        super()
        this.state={
            userData:UserInfo
        }
    }

    // componentDidUpdate(){
    //     this.setState({
    //         userData:UserInfo
    //     })
    //     console.log(this.state.userData)
    // }

    render() {
        return (
            <div classNameName="container">

                {/* <!-- Main content --> */}
                <section className="content">
                    <div className="content-header">
                        <h3 className="font-size-18">User profile</h3>
                    </div>
                    <div className="row">
                        <div className="col-md-3">

                            {/* <!-- Profile Image --> */}
                            <div className="box box-primary">
                                <div className="box-body box-profile">
                                    <img
                                        className="profile-user-img img-responsive img-circle"
                                        src={ProfileAvatar}
                                        alt="User profile picture"
                                    />

                                    <h3 className="profile-username text-center">Theresa Smith</h3>

                                    <p className="text-muted text-center">Software Engineer</p>

                                    <ul className="list-group list-group-unbordered">
                                        <li className="list-group-item">
                                            <div className="item-text">
                                                <i className="fa fa-map-marker mr-2" aria-hidden="true"></i>
                                                <span className="text-muted">Malibu, California</span>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="item-text">
                                                <i className="fa fa-map-marker mr-2" aria-hidden="true"></i>
                                                <span className="text-muted">Department</span>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="item-text">
                                                <i className="fa fa-map-marker mr-2" aria-hidden="true"></i>
                                                <span className="text-muted">Unit</span>
                                            </div>
                                        </li>
                                      
                                    </ul>

                                    <Link to="" className="btn btn-primary btn-block">
                                        <b>Edit profile</b>
                                    </Link>
                                </div>
                                {/* <!-- /.box-body --> */}
                            </div>
                            {/* <!-- /.box --> */}

                            {/* <!-- About Me Box --> */}
                            <div className="box box-primary">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Skills</h3>
                                </div>
                                {/* <!-- /.box-header --> */}
                                <div className="box-body">
                                    <div>
                                        <Badge className="mr-1" pill variant="secondary"> UI Design  </Badge>
                                        <Badge className="mr-1" pill variant="secondary"> Coding  </Badge>
                                        <Badge className="mr-1" pill variant="secondary"> Javascript  </Badge>
                                        <Badge className="mr-1" pill variant="secondary"> PHP  </Badge>
                                        <Badge className="mr-1" pill variant="secondary"> Node.js  </Badge>
                                    </div>
                                </div>
                                {/* <!-- /.box-body --> */}
                            </div>
                            {/* <!-- /.box --> */}
                        </div>


                        {/* <!-- /.col --> */}
                        <div className="col-md-9">
                            <Tabs className="tabs-holder" defaultActiveKey="personalInformation" id="uncontrolled-tab-example">
                                <Tab className="tab-container" eventKey="personalInformation" title="Personal Information">
                                   <PersonalInfo />
                                </Tab>
                                <Tab className="tab-container" eventKey="AcademicQualifications" title="Academic Qualifications">
                                Academic Qualifications component 
                                </Tab>
                                <Tab className="tab-container" eventKey="professionalQualifications" title="Professional Qualifications" >
                                professional Qualifications component
                                </Tab>
                                <Tab className="tab-container" eventKey="workExperience" title="Work Experience" >
                                work Experience Component
                                </Tab>
                            </Tabs>
                        </div>
                        {/* <!-- /.col --> */}
                    </div>
                    {/* <!-- /.row --> */}

                </section>
                {/* <!-- /.content --> */}
            </div>
        )
    }

}

export default Profile;