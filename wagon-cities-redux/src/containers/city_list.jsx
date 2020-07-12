import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import City from './city';
import { setCities } from '../actions';


class CityList extends Component {

  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (
      this.props.cities.map((city, index) => {
        return (
          <City city={city} key={city.name} index={index} />
        );
      })
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
