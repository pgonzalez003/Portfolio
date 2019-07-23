import React, { Component, Fragment } from "react";
import Contact from "../components/Contact";
import "../assets/style/style.css"

class Index extends Component {
    render() {
        return(
            <Fragment>
                <h1>
                    Patrick Gonzalez
                </h1>
                <a href="/Work">Work</a>
                <a href="/Resume">Resume</a>
                <Contact />
            </Fragment>
        );
    }
}

export default Index;