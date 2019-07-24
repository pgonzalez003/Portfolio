import React, { Component, Fragment } from "react";

import "./style.css";

class Contact extends Component {

    render() {
        return(
            <Fragment>
                <div className="row">
                    <div className="col l12">
                        <div>
                            <a class="btn-floating btn-large waves-effect waves-light brown" href="https://www.linkedin.com/in/patrickgonzalez1/">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div> 
                    </div>
                </div>
                <div className="row">
                    <div className="col l12">
                        <div>
                            <a class="btn-floating btn-large waves-effect waves-light brown" href="https://github.com/pgonzalez003">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div class="col l12">
                        <div>
                            <a class="btn-floating btn-large waves-effect waves-light brown" href="/Resume">
                                <i class="far fa-file"></i>
                            </a>
                        </div>
                    </div>
                </div>                
            </Fragment>
        );
    }
}

export default Contact;