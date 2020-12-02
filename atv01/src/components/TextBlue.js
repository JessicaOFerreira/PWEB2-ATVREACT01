import React, {Component} from 'react';

export default class TextBlue extends Component{
  render(){
    return(
      <span className="text-blue">
        {this.props.children}
      </span>
    );
  }
}