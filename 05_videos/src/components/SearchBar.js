import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  handleOnChange = e => {
    this.setState({ term: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();

    this.props.handleOnSubmit(this.state.term);
  };

  render() {
    return (
      <div className="serch-bar ui segment">
        <form onSubmit={this.handleOnSubmit} action="" className="ui form">
          <div className="field">
            <label>VideoSeach</label>
            <input
              value={this.state.term}
              onChange={this.handleOnChange}
              type="text"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
