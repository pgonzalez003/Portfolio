import React, { Component, Fragment } from "react";
import Unit4Cap from "../../assets/images/unitFourCap.PNG";
import "./style.css"

class Alien extends Component {
    render() {
        return(
            <Fragment>
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" id="unit4Cap" src={ Unit4Cap } />
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">Escape the Hive!<i className="material-icons right">. . .</i></span>
                        <p><a href="https://pgonzalez003.github.io/unit-4-game/">App Deployed</a></p>
                        <p><a href="https://github.com/pgonzalez003/unit-4-game">Repo Link</a></p>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">Escape the Hive!<i className="material-icons right">close</i></span>
                        <p>
                        	Random number generated JavaScript game with the goal off collecting enough plutonium fuel cells to escape a hostile Alien planet before time runs out. 
                        </p>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Alien;