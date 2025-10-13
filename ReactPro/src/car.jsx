import React, {Component} from 'react';

class Car extends Component{
    render(){
        return (<h1>my car is: {this.props.name}</h1>);
    }
}

export default Car;