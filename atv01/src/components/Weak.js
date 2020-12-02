import React, {Component} from 'react';

export default class Weak extends Component{
  render(){
    return(
      <span className="weak">
        {this.props.children}
      </span>
    );
  }
}