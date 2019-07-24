import React, { Fragment, Component } from "react";
import ProfilePic from "../../assets/images/profilePic.JPG";
import "./style.css";

class InfoBox extends Component {
    render () {
        return(
            <Fragment>
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" id="profilePic" src={ ProfilePic } />
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">Patrick Gonzalez<i className="material-icons right">. . .</i></span>
                        <p><a href="/Work">Work</a></p>
                        {/* <p><a href="/Contact">Contact</a></p> */}
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">Patrick is a<i className="material-icons right">close</i></span>
                        <p>
                            Full Stack Web Developer with a background in Communications, and life-long dedication to learning. Effective at combining creativity and problem solving to develop user-friendly and aesthetically pleasing applications. Known among peers for strong wit,great team moral,and diligence no matter the complexity of the project.   
                        </p>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default InfoBox;