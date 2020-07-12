import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions/index';

class City extends Component {


  render() {

    let classes = "city";
    if (this.props.city === this.props.selectedcity) {
      classes += " selected";
    }

    return (
      <div className={classes} onClick={() => this.props.selectCity(this.props.city)} >
        <h3>{this.props.city.name}</h3>
      </div>
    );
  }
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(City);
