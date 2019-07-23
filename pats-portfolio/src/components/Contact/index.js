import React, { Component, Fragment } from "react";
import Modal, { Button } from "react-materialize";
import "./style.css";

class Contact extends Component {

    constructor(props)

    render() {
        return(
            <Fragment>
                <Modal header="Modal Header" bottomSheet trigger={<Button />}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </Modal>
            </Fragment>
        );
    }
}

export default Contact;