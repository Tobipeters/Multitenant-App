import React from 'react'
import { Modal } from "reactstrap";

class appModal extends React.Component{
    constructor(props){
        super(props)
 
    }


      render(){
          return (
            <div>
                
            <Modal isOpen={this.props.modalState} toggle={this.props.toggleModal}>
                    <div className="modal-header">
                      <h5 className="modal-title mt-0">Center Modal</h5>
                      <button
                        type="button"
                        onClick={() =>
                          this.setState({ modal_center: false })
                        }
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
             
                    </div>
                  </Modal>
      </div>
          )
          
      }
      
}

export default appModal 