import React from "react";
import PropTypes from "prop-types";
import TypeChecker from "typeco";

const ENTER_KEY = 13;

class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.searchText,
    };

    this.onChangeBound = this.onChangeBound.bind(this);
    this.onEnterBound = this.onEnterBound.bind(this);
    this.onSearchClick = this.onSearchClick.bind(this);
  }

  componentDidUpdate(nextProps) {
    if (this.props.searchText !== nextProps.searchText) {
      this.setState({
        value: nextProps.searchText,
      });
    }
  }

  onChangeBound(event) {
    this.setState({
      value: event.target.value,
    });
    if (TypeChecker.isFunction(this.props.onChange)) {
      this.props.onChange(event.target.value, event);
    }
  }

  onEnterBound(event) {
    const isEnterPressed =
      event.which === ENTER_KEY || event.keyCode === ENTER_KEY;
    if (isEnterPressed && TypeChecker.isFunction(this.props.onEnter)) {
      this.props.onEnter(event.target.value, event);
    }
  }

  onSearchClick() {
    if (TypeChecker.isFunction(this.props.onSearchClick)) {
      this.props.onSearchClick(this.state.value);
    }
  }

  render() {
    const { placeholder } = this.props;

    return (
      <div className="form-control">
        <input
          onChange={this.onChangeBound}
          onKeyPress={this.onEnterBound}
          placeholder={placeholder}
          type="text"
          value={this.state.value}
          className="search-field-input"
        />
        <button className="search-field-button" type="button">
          <i onClick={this.onSearchClick} class="fal fa-search"></i> {"  "}
        </button>
      </div>
    );
  }
}

SearchField.propTypes = {
  classNames: PropTypes.string,
  searchText: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onEnter: PropTypes.func,
  onSearchClick: PropTypes.func,
};

SearchField.defaultProps = {
  classNames: "",
  searchText: "",
  placeholder: "Search",
  onChange: null,
  onEnter: null,
  onSearchClick: null,
};

export default SearchField;
