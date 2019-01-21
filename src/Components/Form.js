import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: '',
      job: ''
    };

    this.state = this.initialState;
  }

  onChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState(this.initialState);
  }

  render() {
    return (
      <form
        className="mt-2 mb-2"
        onSubmit={this.onSubmit}
      >
        <div className="row">
          <div className="col">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              required
            />
          </div>
          <div className="col">
            <label>Job</label>
            <input
              className="form-control"
              type="text"
              name="job"
              value={this.state.job}
              onChange={this.onChange}
              required
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <input
              className="btn btn-success"
              type="submit"
              value="Submit"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
