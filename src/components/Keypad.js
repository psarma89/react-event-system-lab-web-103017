// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component{

  tickle = () => {
    console.log('Entering password...');
  }
  
  render(){
    return (
      <input onKeyUp={this.tickle} type="password" />
    );
  }

}

export default Keypad;
