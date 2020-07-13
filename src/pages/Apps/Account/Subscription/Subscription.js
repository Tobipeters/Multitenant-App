import React from 'react';
import './Sub.css'
import { Row, Col, Card, CardBody } from 'reactstrap';
import { MDBDataTable } from "mdbreact";
import subHistory from '../../../../dummyData/tableData';
import { MdDone } from "react-icons/md";
import SettingMenu from "../../../Shared/SettingMenu";
import { Link } from "react-router-dom";

class subscription extends React.Component {
    constructor() {
        super()

        this.state = {
            newMenu: [
                {
                    link:'a.com',
                    name:'first-menu'
                },
                {
                    link:'b.com',
                    name:'second-menu'
                },
                {
                    link:'c.com',
                    name:'third-menu'
                }

            ]

            
        }
    }
    render() {

        return (
            <div className="container-fluid">
                <div className="page-title-box m-title-pad">
                    <h4 className="font-size-18">Subscription</h4>
                </div>

                <Row className="align-items-center navigation-pane">
                    <Col sm={6}>
                        <div className="page-title-box">
                            <ol className="breadcrumb mb-0 ">
                                <li className="breadcrumb-item">
                                    <Link to="/#"><i className="fa fa-home"></i></Link>
                                </li>
                                <li className="breadcrumb-item">Account</li>
                                <li className="breadcrumb-item active">Subscription</li>
                            </ol>
                        </div>
                    </Col>

                    <Col sm={6}>
                            <div className="float-right d-none d-md-block">
                                <SettingMenu allMenu={this.state.newMenu} />
                            </div>
                        </Col>
                </Row>
                <Card>
                    <CardBody>
                        <h3 className="font-size-18">Subscription History</h3>
                        <MDBDataTable
                            responsive
                            striped
                            bordered
                            striped
                            hover
                            data={subHistory} />
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                        <h3 className="font-size-18">Current Subscription</h3>
                        <Row>
                            <Col className="card-cont">
                                <div className="card">
                                    <div className="card-body">
                                        <ul>
                                            <li>
                                                <MdDone />
                                                <span className="mod-list">Premuim Module 001</span>
                                            </li>
                                            <li>
                                                <MdDone />
                                                <span className="mod-list">Premuim Module 002</span>
                                            </li>
                                            <li>
                                                <MdDone />
                                                <span className="mod-list">Premuim Module 002</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col className="card-cont">
                                <div className="card">
                                    <div className="card-body">
                                        <ul>
                                            <li>
                                                <MdDone />
                                                <span className="mod-list">Premuim Module 001</span>
                                            </li>
                                            <li>
                                                <MdDone />
                                                <span className="mod-list">Premuim Module 002</span>
                                            </li>
                                            <li>
                                                <MdDone />
                                                <span className="mod-list">Premuim Module 002</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col className="card-cont">
                                <div className="card">
                                    <div className="card-body">
                                        <ul>
                                            <li>
                                                <MdDone />
                                                <span className="mod-list">Premuim Module 001</span>
                                            </li>
                                            <li>
                                                <MdDone />
                                                <span className="mod-list">Premuim Module 002</span>
                                            </li>
                                            <li>
                                                <MdDone />
                                                <span className="mod-list">Premuim Module 002</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col className="card-cont">
                                <div className="card">
                                    <div className="card-body">
                                        <ul>
                                            <li>
                                                <MdDone />
                                                <span className="mod-list">Premuim Module 001</span>
                                            </li>
                                            <li>
                                                <MdDone />
                                                <span className="mod-list">Premuim Module 002</span>
                                            </li>
                                            <li>
                                                <MdDone />
                                                <span className="mod-list">Premuim Module 002</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col className="card-cont">
                                <div className="card">
                                    <div className="card-body">
                                        <ul>
                                            <li>
                                                <MdDone />
                                                <span className="mod-list">Premuim Module 001</span>
                                            </li>
                                            <li>
                                                <MdDone />
                                                <span className="mod-list">Premuim Module 002</span>
                                            </li>
                                            <li>
                                                <MdDone />
                                                <span className="mod-list">Premuim Module 002</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col className="card-cont">
                                <div className="card">
                                    <div className="card-body">
                                        <ul>
                                            <li>
                                                <MdDone />
                                                <span className="mod-list">Premuim Module 001</span>
                                            </li>
                                            <li>
                                                <MdDone />
                                                <span className="mod-list">Premuim Module 002</span>
                                            </li>
                                            <li>
                                                <MdDone />
                                                <span className="mod-list">Premuim Module 002</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>

                            <Col className="card-cont">
                                <div className="card">
                                    <div className="card-body">
                                        <ul>
                                            <li>
                                                <MdDone />
                                                <span className="mod-list">Premuim Module 001</span>
                                            </li>
                                            <li>
                                                <MdDone />
                                                <span className="mod-list">Premuim Module 002</span>
                                            </li>
                                            <li>
                                                <MdDone />
                                                <span className="mod-list">Premuim Module 002</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>

            </div>
        )

    }

}


export default subscription;