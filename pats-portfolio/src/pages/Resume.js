import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import rFile from "../assets/images/ResumeWebDev.pdf";
import "../assets/style/style.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
    state = {
        numPages: 2,
        pageNumber: 1,
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { pageNumber, numPages } = this.state;

        return(
            <div className="container">
                <div className="row">
                    <div className="col l12">
                        <div>
                            <Document
                            file={ rFile}
                            onLoadSuccess={this.onDocumentLoadSuccess}
                            >
                            {/* {[1,2].map(page => (
                            <Page pageNumber={page} />
                                ))} */}
                            <Page pageNumber={1} />
                            </Document>
                            <p>Page {pageNumber} of {numPages}</p>
                        </div> 
                        <div>
                            <Document
                            file={ rFile}
                            onLoadSuccess={this.onDocumentLoadSuccess}
                            >
                            {/* {[1,2].map(page => (
                            <Page pageNumber={page} />
                                ))} */}
                            <Page pageNumber={2} />
                            </Document>
                            <p>Page {2} of {numPages}</p>
                        </div> 
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Resume;