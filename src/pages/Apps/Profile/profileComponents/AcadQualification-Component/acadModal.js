import React from 'react'
import { Modal } from 'reactstrap'

class AcademicModal extends React.Component{
    constructor (props){
        super(props)
        
        this.state={
            modal_center:false,
        }
    }

    render(){
        return(
            <Modal
            isOpen={this.props.openModal}
            toggle={this.props.toggleModal}
          >
            <div className="modal-header">
              <h5 className="modal-title mt-0">{this.props.modalHeader}</h5>
              <button
                type="button"
                onClick={()=>this.props.closeModal()}
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <>
            {this.props.modalBody}
            </>
          </Modal>
        )
    }
}

export default AcademicModal;