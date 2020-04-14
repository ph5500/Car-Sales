import React from 'react';
import { connect } from 'react-redux';

import { addFeature } from '../actions/featActions';




const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      {/* add onClick button and pass in props.addFeature(props.feature)} */}
      <button className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
