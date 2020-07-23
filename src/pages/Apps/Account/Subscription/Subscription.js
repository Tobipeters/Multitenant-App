import React from 'react';
import './Sub.css'
import { Row, Col, Card, CardBody } from 'reactstrap';
import { MDBDataTable } from "mdbreact";
import subHistory from '../../../../dummyData/tableData';
import { MdDone } from "react-icons/md";
import AppHeader from '../../../../newComponents/appHeader'

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

                <AppHeader
                title={"Subscription"}
                breadcrumbMain={"Account"}
                breadcrumbSubMain={"Subscription"}
                allMenu={'setting-menu-for-each-page-comes-in-here'}
                />


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