import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import { Badge, Tabs, Tab } from 'react-bootstrap';
import PersonalInfo from './profileComponents/PersonalInfo/personalInfo'
import UserInfo from '../../../dummyData/userInformation'
import ProfileImage from './profileComponents/profileImage'
import Switch from 'react-bootstrap/esm/Switch';
import { switchStatement } from '@babel/types';
// import { userInfo } from 'os';


class Profile extends React.Component {
    constructor() {
        super()
        this.state = {
            userData: UserInfo,
            skills: UserInfo[0].skills,
            orgUnits: [UserInfo[0].orgUnit]
        }
        this.deletSkill = this.deletSkill.bind(this)
    }


    deletSkill(id) {
        //Skills duplicaated array
        const updatedSkills = [...this.state.skills]
        updatedSkills.splice(id, 1)
        this.setState(prevState => ({
            ...prevState,
            skills: updatedSkills
        }))
    }

    render() {
        // console.log(this.state.userData)
        const checkOrgUnit = () => {
            const countUnit = this.state.orgUnits
            const count = this.state.orgUnits[0].length;

            console.log(countUnit[0][0])
            console.log(count)
            switch (count) {
                case 3:
                    return (
                        <div>
                            <li className="list-group-item">
                                <div className="item-text">
                                    <span className="text-muted">Department:</span>
                                    <span className="text-muted">{countUnit[0].name}</span>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="item-text">
                                    <span className="text-muted">Unit:</span>
                                    <span className="text-muted">{countUnit[1].name}</span>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="item-text">
                                    <span className="text-muted">Team:</span>
                                    <span className="text-muted">{countUnit[2].name}</span>
                                </div>
                            </li>
                        </div>
                    );
                    break;

                default:
                    break;
            }
        }
        checkOrgUnit();


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
                                    {/* <img
                                        className="profile-user-img img-responsive img-circle"
                                        src={ProfileAvatar}
                                        alt="User profile picture"
                                    /> */}

                                    <ProfileImage />

                                    <h4 className="profile-username text-center">
                                        {this.state.userData[0].firstName}
                                        &nbsp;
                                        {this.state.userData[0].lastName}
                                    </h4>

                                    <p className="text-muted text-center">{this.state.userData[0].title}</p>

                                    <ul className="list-group list-group-unbordered">
                                        <li className="list-group-item">
                                            <div className="item-text">
                                                <i className="fa fa-map-marker mr-2" aria-hidden="true"></i>
                                                <span className="text-muted">{this.state.userData[0].location}</span>
                                            </div>
                                        </li>
                                        {checkOrgUnit}
                                        {/* <li className="list-group-item">
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
                                        </li> */}

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
                                    <div>{
                                        this.state.skills.map((skill, id) => {
                                            return (
                                                <Badge className="mr-1 mb-1" pill variant="secondary">
                                                    {skill}
                                                    <i onClick={() => this.deletSkill(id)} class="fa fa-times ml-2 del-skill" aria-hidden="true"></i>
                                                </Badge>
                                            )
                                        })
                                    }
                                    </div>
                                </div>
                                {/* <!-- /.box-body --> */}
                            </div>
                            {/* <!-- /.box --> */}
                        </div>


                        {/* <!-- /.col --> */}
                        <div className="col-md-9">
                            <Tabs className="tabs-holder" defaultActiveKey="personalInformation" >
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