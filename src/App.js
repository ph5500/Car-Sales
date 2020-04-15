import React from 'react';

import { connect } from "react-redux";

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
// import { stat } from 'fs';

const App = props => {

  //removed data and inputted into featReducer file
  //what do we do with this below
  // const removeFeature = item => {
  // dispatch an action here to remove an item

  //what do we do with this below
  // const buyItem = item => {
  //   // dipsatch an action here to add an item
  // };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />

        {/* <Header car={state.car} /> */}
        {/* <AddedFeatures car={state.car} /> */}
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
        {/* <AdditionalFeatures additionalFeatures={state.additionalFeatures} /> */}
        {/* <Total car={state.car} additionalPrice={state.additionalPrice} /> */}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  };
};


export default connect(mapStateToProps, {})(App);
