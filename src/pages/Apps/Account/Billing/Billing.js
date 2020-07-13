import React from 'react'
import './Billing.css'
import { Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom'
import SettingMenu from "../../../Shared/SettingMenu";
import billingData from '../../../../dummyData/billingData'

const billing = () => {

    let invoiceList = billingData.map((invoice)=>{
        console.log(invoice);
    })

    return (
        <div className="container-fluid">
            <div className="page-title-box m-title-pad">
                <h4 className="font-size-18">Billing</h4>
            </div>

            <Row className="align-items-center navigation-pane">
                <Col sm={6}>
                    <div className="page-title-box">
                        <ol className="breadcrumb mb-0 ">
                            <li className="breadcrumb-item">
                                <Link to="/#"><i className="fa fa-home"></i></Link>
                            </li>
                            <li className="breadcrumb-item">Account</li>
                            <li className="breadcrumb-item active">Billing</li>
                        </ol>
                    </div>
                </Col>

                <Col sm={6}>
                    <div className="float-right d-none d-md-block">
                        <SettingMenu />
                    </div>
                </Col>
            </Row>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Invoice</h4>

                            <div className="table-responsive">
                                <table className="table mb-0">
                                    <thead className="thead-light">
                                        <tr>
                                            <th>No</th>
                                            <th>Name</th>
                                            <th>Amount</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default billing;