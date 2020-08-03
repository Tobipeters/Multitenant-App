import React from 'react'
import { Link } from 'react-router-dom'
import invoiceData from '../../../../../dummyData/invoiceData';
import '../Payment.css'
import InvoiceModal from '../../../../Shared/appModal'
import { Badge } from 'react-bootstrap'

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
        this.closeModal = this.closeModal.bind(this);
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

    closeModal() {
        this.setState(prevState => ({
            modal_center: !prevState.modal_center
        }))
    }

    //Modal for each invoice 
    renderModal = () => {
        if (this.state.selectedInvoice !== null) {
            const clickedInvoice = this.state.invoices[this.state.selectedInvoice];
            return (
                <div className="modal-body">
                   <div className="transaction-status">
                   <Badge className="trans-success-badge">
                   <i className="fa fa-check" aria-hidden="true"></i>
                   </Badge>
                        <p>Your Transaction was Successful</p>
                   </div>
                    <ul className="list-group list-group-unbordered">
                        <li className="list-group-item">
                            <div className="item-text">
                                <h6 className="text-muted">Amount</h6>
                                <span className="text-muted">{clickedInvoice.transactionAmount}</span>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="item-text">
                                <h6 className="text-muted">Transaction Date</h6>
                                <span className="text-muted">{clickedInvoice.dateTime}</span>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="item-text">
                                <h6 className="text-muted">Transaction Title</h6>
                                <span className="text-muted">{clickedInvoice.transactionTitle}</span>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="item-text">
                                <h6 className="text-muted">Transaction ID</h6>
                                <span className="text-muted">{clickedInvoice.transactionId}</span>
                            </div>
                        </li>
                    </ul>
                    <button className="btn btn-primary ">Print Receipt</button>
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
                            <Link to="#" onClick={() => this.tog_center(id)}>more</Link>
                        </span>
                    </div>
                </div>
            );
        });

        return (
            <div className="bottom-space">
                {invoiceList}
                {/* Invoive modal start here */}
                <InvoiceModal
                    openModal={this.state.modal_center}
                    toggleModal={this.tog_center}
                    backdrop="static"
                    modalBody={this.renderModal()}
                    modalHeader="Transaction details"
                    closeModal={this.closeModal}
                />
            </div>
        )
    }
}

export default Invoice;