import React from 'react';

class Kittens extends React.Component {
  render() {
    return (
      <>
        <h1 style={{ color: 'blue' }}>A Child Class Component</h1>

        <h2>Tartar has {this.props.kittens} kittens</h2>
      </>
    );
  }
}
export default Kittens;
