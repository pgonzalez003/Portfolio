import React, { Component, Fragment } from "react";
import "./style.css";
import GiaLogo from "../../assets/images/logo.png";

class Gia extends Component {
    render() {
        return(
            <Fragment>
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" id="giaLogo" src={ GiaLogo } />
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">Gia<i className="material-icons right">. . .</i></span>
                        <p><a href="https://pgonzalez003.github.io/giaApp/">App Deployed</a></p>
                        <p><a href="https://github.com/pgonzalez003/giaApp">Repo Link</a></p>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">Gia<i className="material-icons right">close</i></span>
                        <p>
                            GIA or Global Intellegince Agency, is travel based application that
                            allows users to have the most pertinent information at the touch of
                            finger. GIA will be able to tell travels the time zone, language, any
                            travel advisories currently in effect, and much more!
                        </p>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Gia;
