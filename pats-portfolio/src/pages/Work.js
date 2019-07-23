import React, { Component, Fragment } from "react";
import Gia from "../components/Gia";
import Alien from "../components/Alien";
import Mochi from "../components/Mochi";
import "./workStyle.css";

class Work extends Component {
    render() {
        return(
            <Fragment>
               <div className="container">
                    <div className="container">
                        <div className="row">
                            <div className="col l12">
                                <Mochi />  
                            </div>
                        </div>
                        <div className="col l12">
                            <div className="col l12">
                                <Alien />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col l12">
                                <Gia />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col l8"></div>
                        <div className="col l4">
                            <a href="/">Home</a>
                        </div>
                    </div>
               </div>
            </Fragment>
        );
    }
}

export default Work;
