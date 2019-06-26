import React from "react";
import "jquery";
import M from "materialize-css";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import { Collapsible, CollapsibleItem, Button } from "react-materialize";
import "./Sessiontask.css";

class SessionObj extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      position: "",
      language: "",
      dname: "",
      dposition: "",
      dlanguage: "",
      yes: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
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

    var getObject = JSON.parse(sessionStorage.getItem("Data"));
    console.log(getObject);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const dataObj = {};
    dataObj.name = this.state.name;
    dataObj.position = this.state.position;
    if (typeof this.state.language !== "undefined") {
      dataObj.language = this.state.language.split(",");
    }


    sessionStorage.setItem("Data", JSON.stringify(dataObj));
  }

  onDelete = e => {
    e.preventDefault();
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("position");
  };

  onClear = e => {
    e.preventDefault();
    sessionStorage.clear();
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s12 m12 l12">
              {this.state.yes ? 
                <Collapsible className="collapsible" popout>
                  <CollapsibleItem
                    className="teal lighten-2 collapsible-item"
                    header={this.state.dname}
                    icon="filter_drama"
                    style={{ background: "black" }}
                  >
                    {this.state.dposition}
                    <div className="section" />
                    <hr />
                    <div className="row center-align">
                      <Button waves onClick={this.onDelete}>
                        delete
                      </Button>
                      <Button waves onClick={this.onClear}>
                        clear
                      </Button>
                    </div>
                  </CollapsibleItem>
                </Collapsible>
              : 
                <p>sorry no data in sessionStorage</p>
              }
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
                      value={this.state.name}
                      onChange={this.onChange}
                    />
                    <label htmlFor="input_text">USER NAME</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">landscape</i>
                    <textarea
                      id="icon_prefix2"
                      name="position"
                      className="materialize-textarea"
                      data-length="120"
                      value={this.state.position}
                      onChange={this.onChange}
                    />
                    <label htmlFor="icon_prefix2">position</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">settings_ethernet</i>
                    <input
                      id="language_text"
                      type="text"
                      name="language"
                      value={this.state.language}
                      onChange={this.onChange}
                    />
                    <label htmlFor="language_text">LANGUAGE</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer black-foot">
            <button
              type="submit"
              onClick={this.onSubmit}
              className="waves-effect waves-blue blue btn-flat text-white"
            >
              <i className="material-icons left">play_for_work</i>
              save
            </button>
            <a
              href="#!"
              className="modal-close waves-effect waves-light red btn-flat  text-white"
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

export default SessionObj;
