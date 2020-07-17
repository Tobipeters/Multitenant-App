import React from 'react'
import './Payment.css'
import { Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom'
import SettingMenu from "../../../Shared/SettingMenu";
import packages from '../../../../dummyData/packages';
import Invoice from '../../../../newComponents/invoice'

class Billing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            expandHeight: '250px',
        }
        this.toogleHeight = this.toogleHeight.bind(this);
    }

    toogleHeight() {
        if (this.state.expandHeight === '250px') {
            this.setState({
                expandHeight: 'fit-content'
            })
        } else {
            this.setState({
                expandHeight: '250px'
            })
        }
    };
    


    render() {
        let packageLists = packages.map((packageList) => {
            return (
                <Col xl={3} md={6} key={packageList.id}>
                    <Card className="pricing-box price-card">
                        <CardBody className="p-1 card-easing">
                            <div className="media mt-2">
                                <div className="media-body text-center price-cont">
                                    <h4 className="mt-0">{packageList.name}</h4>
                                    <p className="text-muted mb-0">Sed ut neque unde</p>
                                </div>
                            </div>
                            <div className="pricing-features mt-3 pt-2">
                                <div className="fold-modules" style={{ maxHeight: this.state.expandHeight }}>
                                    {
                                        packageList.module.map((mod, id) => {
                                            return (
                                                <p key={id} className="package-features">
                                                    <i className="mdi mdi-check text-primary mr-2"></i>
                                                    {mod}
                                                </p>
                                            )
                                        })}
                                </div>
                                <div className="mt-2 mb-2">
                                    <div 
                                    onClick={this.toogleHeight} 
                                    className="expand-features"
                                    >
                                        <i className="fa fa-angle-down mr-2" aria-hidden="true"></i>
                                        <span>Expand packages</span>
                                    </div>
                                    {/* <i style={{ display: 'none' }} className="fa fa-angle-up" aria-hidden="true"></i> */}
                                </div>

                            </div>
                            <div className="text-center mt-3">
                                <h1 className="mb-0">
                                    <sup>
                                        <small>$</small>
                                    </sup>
                                    {packageList.price}/<span className="font-size-16">Per month</span>
                                </h1>
                            </div>
                            <div className="mt-3">
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


                {/* Invoice component start here */}
                <div className="m-sub-title  invoice-brd">
                    <h3 className="font-size-18 ">Invoice History</h3>
                </div>
                <Invoice />
                {/* Invoice component ends here */}


            </div>
        )
    }


}


export default Billing;