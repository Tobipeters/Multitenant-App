import React from 'react';
import { Row, Col } from 'reactstrap';
import SettingMenu from "../../pages/Shared/SettingMenu";
import { Link } from "react-router-dom";


const appHeader = (props) =>{

    return (
        <div>
             <div className="page-title-box m-title-pad">
                    <h4 className="font-size-18">{props.title}</h4>
                </div>

                <Row className="align-items-center navigation-pane">
                    <Col sm={6}>
                        <div className="page-title-box">
                            <ol className="breadcrumb mb-0 ">
                                <li className="breadcrumb-item">
                                    <Link to="/"><i className="fa fa-home"></i></Link>
                                </li>
                                <li className="breadcrumb-item">{props.breadcrumbMain}</li>
                                <li className="breadcrumb-item active">{props.breadcrumbSubMain}</li>
                            </ol>
                        </div>
                    </Col>

                    <Col sm={6}>
                            <div className="float-right d-none d-md-block">
                                <SettingMenu />
                            </div>
                        </Col>
                </Row>
        </div>
    )
}

export default appHeader