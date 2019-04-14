import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "../Modal";
import history from "../../history";
import { getStream, deleteStream } from "../../actions";

class StreamDelete extends Component {
  actions = () => {
    return (
      <>
        <button onClick={this.handleDelete} className="ui button negative">
          Delete
        </button>
        <button onClick={this.handleDismiss} className="ui button">
          Cancel
        </button>
      </>
    );
  };

  handleDelete = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  handleDismiss = () => {
    history.push("/");
  };

  renderContent = () => {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }
    return `Are you sure you want to delete this stream with title: ${
      this.props.stream.title
    }?`;
  };

  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }

  render() {
    return (
      <Modal
        header="Delete Stream"
        content={this.renderContent()}
        actions={this.actions()}
        onDismiss={this.handleDismiss}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { getStream, deleteStream }
)(StreamDelete);
