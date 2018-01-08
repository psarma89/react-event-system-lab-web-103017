// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component{

  func1 = () => {
    console.log('Good!')
  }

  func2 = () => {
    console.log('Hey! Eyes on me!')
  }

  render(){
    return (
      <button onFocus={this.func1} onBlur={this.func2}></button>
    )
  }
}

export default EyesOnMe;
