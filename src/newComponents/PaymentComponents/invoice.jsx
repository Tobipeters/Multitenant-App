import React from 'react'
import { Link } from 'react-router-dom'
import invoiceData from '../../dummyData/invoiceData';
import { Modal } from 'reactstrap'

class Invoice extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modal_center: false,
            visible: false,
            selectedInvoice: null,
            invoices: invoiceData,
        }
        this.tog_center = this.tog_center.bind(this);
        this.renderModal = this.renderModal.bind(this);
    }


    removeBodyCss() {
        document.body.classList.add("no_padding");
    }

    tog_center(id) {
        this.setState(prevState => ({
            modal_center: !prevState.modal_center,
            selectedInvoice: id
        }));
        this.removeBodyCss();

    };

    //Modal for each invoice 
    renderModal = () => {
        if (this.state.selectedInvoice !== null) {
            const clickedInvoice = this.state.invoices[this.state.selectedInvoice];
            console.log(clickedInvoice)
            return(
                <div className="modal-body">
                 <span> {clickedInvoice.transactionAmount} </span>
                 <h3> {clickedInvoice.transactionTitle} </h3>
                </div>
            );
        }
    }


    render() {
  
        const invoiceList = this.state.invoices.map((invoice, id) => {
            return (
                <div key={id} className="trans-list">
                    <div className="first-line-tr">
                        <span className="trans-title">{invoice.transactionTitle}</span>
                        <span className="trans-price"> $ {invoice.transactionAmount}</span>
                    </div>
                    <div className="trans-status">
                        <div>
                            <span variant="success">Successful </span>
                            <span> {invoice.dateTime}</span>
                            <span> {invoice.transactionId} </span>
                        </div>
                        <span className="trans-more">
                            <Link onClick={() => this.tog_center(id)}>more</Link>
                        </span>
                    </div>
                </div>
            );
        });

       


        return (
            <div className="bottom-space">
                {invoiceList}

                <Modal isOpen={this.state.modal_center} toggle={this.tog_center}>
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
                   <div> {this.renderModal(this.state.invoices[this.state.selectedInvoice])} </div>
                </Modal>

            </div>
        )
    }
}

export default Invoice;