import {connect} from 'react-redux';
import React from 'react';
//1.redux-sagas : when a button clicked, if our UI have to fetch some information from remote
// server,
//


class Counter extends React.Component {

  increment = () => {

    this.props.dispatch({type: "INCREMENT"})
  }

  decrement = () => {
    this.props.dispatch({type: "DECREMENT"})
  }

  render() {

    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="counter">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {

  return {
    count: state.count,

  };
}

//export default Counter;
export default connect(mapStateToProps)(Counter);