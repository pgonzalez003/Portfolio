import React, { Component, Fragment } from "react";
import MochiLogo from "../../assets/images/mochiLogo.png";
import "./style.css";

class Mochi extends Component {
    render() {
        return(
            <Fragment>
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" id="mochiLogo" src={ MochiLogo } />
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">Mochi<i className="material-icons right">. . .</i></span>
                        <p><a href="https://mochifinalproject.herokuapp.com/">App Deployed</a></p>
                        <p><a href="https://github.com/KrystalCW/Project3">Repo Link</a></p>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">Mochi<i className="material-icons right">close</i></span>
                        <p>
                            It may be cliche, but many people don't know what they have until it's gone. When a disaster hits and you're stuck trying to catalogue your entire life, the insurance companies ultimately win. With Mochi, you can have peace of mind knowing your items are catalogued before an emergency, meaning you can get back to what's important: rebuilding your life. 
                        </p>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Mochi;