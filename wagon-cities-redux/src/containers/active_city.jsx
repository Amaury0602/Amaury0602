import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component {

  render() {

    let cityDiv;

    if (this.props.selectedcity) {
      let src = `https://kitt.lewagon.com/placeholder/cities/${this.props.selectedcity.slug}`;
      cityDiv = (
        <div>
          <h3>{this.props.selectedcity.name}</h3>
          <p>{this.props.selectedcity.address}</p>
          <img src={src} alt="" />
        </div>
      );
    } else {
      cityDiv = (
        <p>select a city</p>
      );
    }


    return cityDiv;
  }
}

function mapStateToProps(state) {
  return {
    selectedcity: state.selectedcity
  };
}

export default connect(mapStateToProps)(ActiveCity);
