import React from "react";
import "jquery";
import M from "materialize-css";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import { Collapsible, CollapsibleItem, Button } from "react-materialize";
import "./Createtask.css";

class Createtask extends React.Component {
  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s12 m12 l12">
              <Collapsible className="collapsible" popout>
                <CollapsibleItem
                  className="teal lighten-2 collapsible-item"
                  header="Better safe than sorry. That's my motto."
                  icon="filter_drama"
                  style={{ background: "black" }}
                >
                  Better safe than sorry. That's my motto.
                  <div className="section" />
                  <hr />
                  <div className="row center-align">
                    <Button waves>update</Button>
                    <Button waves>completed</Button>
                  </div>
                </CollapsibleItem>
              </Collapsible>
            </div>
          </div>
        </div>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal"
          className="modal modal-container"
        >
          <div className="modal-content">
            <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">face</i>
                    <input
                      id="input_text"
                      type="text"
                      name="name"
                      data-length="10"
                    />
                    <label for="input_text">USER NAME</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">landscape</i>
                    <textarea
                      id="icon_prefix2"
                      name="address"
                      className="materialize-textarea"
                      data-length="120"
                    />
                    <label for="icon_prefix2">ADDRESS</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer black-foot">
            <button
              type="submit"
              className="waves-effect waves-green btn-flat"
            >
              <i className="material-icons left">close</i>close
            </button>
            <a
              href="#!"
              className="modal-close waves-effect waves-green btn-flat"
            >
              {" "}
              <i className="material-icons left">close</i>close
            </a>
          </div>
        </div>

        <div className="fixed-action-btn horizontal spin-button">
          <a
            href="/"
            className="waves-effect waves-light btn-floating btn-large white modal-trigger"
            data-target="modal"
          >
            <i className="large material-icons edit-icon">mode_edit</i>
            Modal
          </a>
        </div>
      </div>
    );
  }
}

export default Createtask;
