import React from 'react';
import Kittens from './Kittens';

class Cats extends React.Component {
  constructor() {
    super();
    this.state = { color: 'yellow', name: 'Tartar', kittens: 3 };
  }
  componentDidMount() {
    alert('This componentDidMount to the DOM');
  }
  changeColor = () => {
    this.setState({ color: 'red' });
  };
  render() {
    return (
      <>
        <h1 style={{ color: 'blue' }}>A Class Component</h1>
        <h2>Hello Cats</h2>
        <h2>
          Hello Cats. My name is {this.state.name} and I am the color{' '}
          {this.state.color}.
        </h2>
        <Kittens kittens={this.state.kittens} />

        <button type='button' onClick={this.changeColor}>
          Class Change color
        </button>
      </>
    );
  }
}
export default Cats;
