import { connect } from 'react-redux';
import React from 'react';
import { myAction } from '../../reducers/actions';

const mapStateToProps = (state, ownProps) => {
  return {
    str: state.myReducer
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (str) => {
      dispatch(myAction(str));
    }
  }
}

const MyTestNC = (props) => {
    return(
        <div>
            <label>A test of reducer</label>
            <button onClick={() => {props.onClick('Click ' + new Date())}}>Test</button>
            <span>{props.str}</span>
        </div>
    );
}

const MyTest = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyTestNC)

export default MyTest;