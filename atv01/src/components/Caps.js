import React, {Component} from 'react';

export default class Caps extends Component{
  render(){
    return(
      <span className="caps">
        {this.props.children}
      </span>
    );
  }
}