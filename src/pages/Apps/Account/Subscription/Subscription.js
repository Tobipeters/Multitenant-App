import React from 'react';
import './Sub.css'
import { Row, Col, Card, CardBody } from 'reactstrap';
import { MDBDataTable } from "mdbreact";
import subHistory from '../../../../dummyData/tableData';
import { MdDone } from "react-icons/md";

class subscription extends React.Component {
    constructor() {
        super()

        this.state = {
            data: {

            }
        }
    }
    render() {

        return (
            <div className="container-fluid">
                <Row className="align-items-center">
                    <Col sm={6}>
                        <div className="page-title-box">
                            <h3 className="font-size-22">Subscription</h3>
                        </div>
                    </Col>

                    {/* <Col sm="6">
                  <div className="float-right d-none d-md-block">
                    <SettingMenu />
                  </div>
                </Col> */}
                </Row>
                <div>
                    <h3 className="font-size-18">Subscription History</h3>
                    <MDBDataTable
                        responsive
                        striped
                        bordered
                        striped
                        hover
                        data={subHistory} />
                </div>
                <div>
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

                </div>

            </div>
        )

    }

}


export default subscription;