import React, { Component, Fragment } from "react";
// import Contact from "../components/Contact";
import InfoBox from "../components/InfoBox";
import Contact from "../components/Contact";
import "../assets/style/style.css"

class Index extends Component {


    render() {
        return(
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col l3"></div>
                        <div className="col l6">
                            <InfoBox />
                        </div>
                        <div className="col l3">'
                            <Contact />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Index;