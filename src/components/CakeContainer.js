import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

const CakeContainer = props => {
  return (
    <div>
      <h1>Number of Cakes = {props.numberOfCakes}</h1>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    numberOfCakes: state.cake.numberOfCakes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeContainer);
