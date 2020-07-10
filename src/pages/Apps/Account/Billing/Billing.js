import React from 'react'
import {Row, Col} from 'reactstrap';
// import SettingMenu from "../../Shared/"; 

const billing = () =>{
    return(
        <div className="container-fluid"> 
               <Row className="align-items-center">
            <Col sm={6}>
              <div className="page-title-box">
                <h4 className="font-size-18">Billing</h4>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item active">
                    Welcome to Veltrix Dashboard
                  </li>
                </ol>
              </div>
            </Col>

            {/* <Col sm="6">
              <div className="float-right d-none d-md-block">
                <SettingMenu />
              </div>
            </Col> */}
          </Row>

        </div>
    )
}


export default billing;