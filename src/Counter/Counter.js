import React, { Component } from 'react';

class Counter extends Component {
   
   constructor(props) {
       super(props);
       this.state = {
           num:0
       };
   }

   Increase() {
       this.setState({
           num: this.state.num + 1   
       });
   }

   Decrease() {
    this.setState({
        num: this.state.num -1   
    });
}
   
    render() {
        return (
            <div>
                {this.state.num}
                <button onClick = {this.Increase.bind(this)}>Increase</button>
                <button onClick = {this.Decrease.bind(this)}>Decrease</button>
            </div>
        );
    }
}

export default Counter;
