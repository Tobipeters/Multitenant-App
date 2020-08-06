import React from 'react'
import { Badge, InputGroup, FormControl, } from 'react-bootstrap'
import DocType from '../../../../dummyData/documentData'
import DocumentModal from "../../../Shared/appModal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const Schema = Yup.object().shape({
    name: Yup.string()
        .required("")
        .min(2, "Enter valid name"),
    document: Yup.string()
        .required("choose document"),
    type: Yup.string()
        .required("Select a document type"),
});

class Document extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            doctype: DocType,
            documentData: {
                name: "",
                document: null,
                type: "",
            },
            modal_add: false,
            errorStyle: "errorMsg",
            errorMsg: {
                name: 'Name is required *',
                document: 'Choose a file to upload *',
                type: 'Select a document type *'
            },
            errorDisplay: "none",
            //Error message for file cancellation during upload
            fileError: {
                display: 'none',
                label: 'Choose a file to upload *',
                class: 'errorMsg'
            }
        }
        this.fileInput = React.createRef();
        this.closeAddModal = this.closeAddModal.bind(this)
        this.addDocumentModal = this.addDocumentModal.bind(this)
        this.toggleAddDocument = this.toggleAddDocument.bind(this)
        this.handleAddEvent = this.handleAddEvent.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.submitDocumentData = this.submitDocumentData.bind(this)
    }


    //Toggle modal function 
    toggleAddDocument() {
        this.setState(prevState => ({
            modal_add: !prevState.modal_add,
        }));
    }

    //Function to close add document modal
    closeAddModal() {
        this.setState(prevState => ({
            modal_add: !prevState.modal_add,
            documentData: {
                name: "",
                document: null,
                type: "",
            },
        }))
    }

    //Function to handle onchange for add Document modal form
    handleAddEvent(event) {
        const value = event.target.value;
        const name = event.target.name;
        console.log(value)
        this.setState(prevState => ({
            documentData: {
                ...prevState.documentData,
                [name]: value
            }
        }))
        console.log(this.state.documentData)
    }

    //handle event to get selected file 
    handleFile(event) {
        event.preventDefault();
        const fileData = this.fileInput.current.files.length
        if (fileData >= 1) {
            this.setState(prevState => ({
                documentData: {
                    ...prevState.documentData,
                    document: this.fileInput.current.files[0].name,
                },
                //Ignore error when file is picked successfully
                fileError: {
                    ...prevState.fileError,
                    display: 'none'
                }
            }))
        } else {
            //setting state for cancellation during file upload
            this.setState(prevState => ({
                ...prevState,
                fileError: {
                    ...prevState.fileError,
                    display:'block'
                }
            }))
        }
    }

    submitDocumentData(event) {
        event.preventDefault()
        const file = this.state.documentData.document
        const type = this.state.documentData.type
        //on submit when file isn't picked and type isn;t selevcetd, error messgae should be logged
        if (file === null || type === "") {
            this.setState(prevState => ({
                ...prevState,
                errorDisplay: "block",
            }))
        } else {
            this.setState(prevState => ({
                ...prevState,
                errorDisplay: "none",
            }))
            console.log(this.state.documentData)
        }

    }

    //input form for Adding data in the modal body
    addDocumentModal = () => {
        return (
            <div className="modal-body">
                <Formik
                    initialValues={{ name: "", document: null, type: "" }}
                    validationSchema={Schema}
                    onSubmit={this.submitDocumentData}
                >
                    {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        touched,
                        isValid,
                        errors }) => (
                            <Form onSubmit={this.submitDocumentData}>
                                <InputGroup size="sm" className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text >Document Name</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Field
                                        type="text"
                                        placeholder="Document name"
                                        name="name"
                                        value={this.state.documentData.name}
                                        onChange={this.handleAddEvent}
                                        className={`form-control ${
                                            touched.name ? "is-invalid" : ""
                                            }`}
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="name"
                                        className="invalid-feedback"
                                    />
                                </InputGroup>
                                <small className={this.state.errorStyle} style={{ display: this.state.errorDisplay }}>
                                    {this.state.errorMsg.name}
                                </small>

                                <InputGroup size="sm" className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text >Type</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <select size="sm" as="select"
                                        value={this.state.documentData.type}
                                        name="type"
                                        onChange={this.handleAddEvent}
                                        className={`form-control ${
                                            touched.type && errors.type ? "is-invalid" : ""
                                            }`}>

                                        <option disabled >Select document type</option>
                                        {this.state.doctype.map((type, id) => {
                                            return (
                                                <option key={id} value={type} >{type}</option>
                                            )
                                        })}
                                    </select>
                                </InputGroup>
                                <small className={this.state.errorStyle} style={{ display: this.state.errorDisplay }}>
                                    {this.state.errorMsg.type}
                                </small>


                                <InputGroup size="sm" className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text >Document</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <input
                                        type="file"
                                        ref={this.fileInput}
                                        accept="image/*, .pdf, .doc, .docx, .xls, .xlsx, .txt, .ppt, .pptx, .ods, .odt, .csv, application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                        onChange={this.handleFile}
                                        name="document"
                                        className="form-control" />
                                </InputGroup>
                                <small className={this.state.errorStyle} style={{ display: this.state.errorDisplay }}>
                                    {this.state.errorMsg.document}
                                </small>
                                {/* Erro message strictly for file cancellation */}
                                <small className={this.state.fileError.class} style={{ display: this.state.fileError.display }}>
                                    {this.state.fileError.label}
                                </small>


                                <button type="submit" className="btn btn-primary add-btn btn-add-new">Add New</button>
                            </Form>
                        )}
                </Formik>
            </div>
        )
    }


    render() {
        return (
            <div>
                <table className="table mb-0 data-table">
                    <thead className="thead-light">
                        <tr>
                            <th>S/N</th>
                            <th>Document name</th>
                            <th>Select Document</th>
                            <th>Document type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody >
                        {/* <tr >
                            <th scope="row">1</th>
                            <td></td>
                            <td></td>
                            <td>


                            </td>
                            <td>
                                <Badge variant="success" className="mr-3 action-btn"  >
                                    Edit
                                </Badge>

                                <Badge variant="danger" className="action-btn" >
                                    Delete
                                </Badge>
                            </td>
                        </tr> */}
                    </tbody>
                </table>
                <button
                    className="btn btn-primary add-btn"
                    onClick={() => this.toggleAddDocument()}
                >
                    Add more
                </button>

                {/* Academic modal for Adding Academic data start here */}
                <DocumentModal
                    openModal={this.state.modal_add}
                    toggleModal={this.toggleAddDocument}
                    backdrop={true}
                    modalBody={this.addDocumentModal()}
                    modalHeader="Add New Document"
                    closeModal={this.closeAddModal}
                />
                {/* Academic modal for Adding Academic data Ends here */}
            </div>
        )
    }
}

export default Document