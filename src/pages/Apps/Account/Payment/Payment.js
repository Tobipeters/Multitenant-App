import React from 'react'
import './Payment.css'
import { Row, Col, Card, CardBody } from 'reactstrap';
import { Breadcrumb } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SettingMenu from "../../../Shared/SettingMenu";
import billingData from '../../../../dummyData/billingData';
import packages from '../../../../dummyData/packages'

const billing = () => {

    let invoiceList = billingData.map((invoice, id) => {
        return (
            <tr key={id}>
                <th scope="row">{invoice.transactionId}</th>
                <td>{invoice.company}</td>
                <td>{invoice.transactionAmt}</td>
                <td>{invoice.date}</td>
            </tr>
        );
    });


    let packageLists = packages.map((packageList) => {
        return (
            <Col xl={3} md={6} key={packageList.id}>
                <Card className="pricing-box price-card">
                    <CardBody className="p-4">
                        <div className="media mt-2">
                            <div className="media-body text-center price-cont">
                                <h4 className="mt-0">{packageList.name}</h4>
                                <p className="text-muted mb-0">Sed ut neque unde</p>
                            </div>
                        </div>
                        <div className="pricing-features mt-3 pt-2">
                            {
                                packageList.module.map((mod, id) => {
                                    return (
                                        <p key={id}>
                                            <i className="mdi mdi-check text-primary mr-2"></i>
                                            {mod}
                                        </p>
                                    )
                                })}
                        </div>
                        <div className="text-center mt-5">
                            <h1 className="mb-0">
                                <sup>
                                    <small>$</small>
                                </sup>
                                {packageList.price}/<span className="font-size-16">Per month</span>
                            </h1>
                        </div>
                        <div className="mt-5">
                            <Link
                                to="#"
                                className="btn btn-primary btn-block waves-effect waves-light"
                            >
                                Pay now
                </Link>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        )
    });
    console.log(packageLists)
    return (
        <div className="container-fluid">
            <div className="page-title-box m-title-pad">
                <h4 className="font-size-18">Payment</h4>
            </div>

            <Row className="align-items-center navigation-pane">
                <Col sm={6}>
                    <div className="page-title-box">
                        <ol className="breadcrumb mb-0 ">
                            <li className="breadcrumb-item">
                                <Link to="/#"><i className="fa fa-home"></i></Link>
                            </li>
                            <li className="breadcrumb-item">Account</li>
                            <li className="breadcrumb-item active">Payment</li>
                        </ol>
                    </div>
                </Col>

                <Col sm={6}>
                    <div className="float-right d-none d-md-block">
                        <SettingMenu />
                    </div>
                </Col>
            </Row>

            {/* Pricing packages start here */}
            <div className="m-sub-title">
                <h3 className="font-size-18">Packages and Pricing</h3>
            </div>
            <Row className="bottom-space">
                {packageLists}
            </Row>

            <div className="m-sub-title  invoice-brd">
                <h3 className="font-size-18 ">Invoice History</h3>
            </div>
            <div className="bottom-space">
                <div className="trans-list">
                    <div className="first-line-tr">
                        <span className="trans-title">Premium Subscription for betacar</span>
                        <span className="trans-price"> $ 390</span>
                    </div>
                    <div className="trans-status">
                        <div>
                            <span variant="success">Successful </span>
                            <span> 2019-06-10 11:43 AM </span>
                            <span> 1023245943 </span>
                        </div>

                        <span className="trans-more">
                            <Link>more</Link>
                        </span>
                    </div>
                </div>
                <div className="trans-list">
                    <div className="first-line-tr">
                        <span className="trans-title">Premium Subscription for betacar</span>
                        <span className="trans-price"> $ 390</span>
                    </div>
                    <div className="trans-status">
                        <div>
                            <span variant="success">Successful </span>
                            <span> 2019-06-10 11:43 AM </span>
                            <span> 1023245943 </span>
                        </div>

                        <span className="trans-more">
                            <Link>more</Link>
                        </span>
                    </div>
                </div>
                <div className="trans-list">
                    <div className="first-line-tr">
                        <span className="trans-title">Premium Subscription for betacar</span>
                        <span className="trans-price"> $ 390</span>
                    </div>
                    <div className="trans-status">
                        <div>
                            <span variant="success">Successful </span>
                            <span> 2019-06-10 11:43 AM </span>
                            <span> 1023245943 </span>
                        </div>

                        <span className="trans-more">
                            <Link>more</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default billing;