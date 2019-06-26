import React from "react";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import logo from "../img/rain.jpg";
import "./Landing.css";

class Landing extends React.Component {
  render() {
    return (
      <div className="row center-align card-land">
        <div className="col sm1 col m1 col l1" />
        <div className="col sm10 col m10 col l10">
          <div className="card-image text-center">
            <img clasName="responsive-img img" src={logo} alt="" style={{width:'80vw', height:'70vh', borderRadius:'1rem', marginTop:'2rem'}} />
            <h2 className="card-title">SESSION X LOCAL</h2>
          </div>
        </div>

        <div className="col sm1 col m1 col l1" />
      </div>
    );
  }
}

export default Landing;
