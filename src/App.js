//feature 1
import React from 'react';
import data from './data.json';
import './App.css';
import Products from './components/Products';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      products:data.products,
      size:"",
      sort:""

    }
  }
  click(){
    console.log("gii");
    console.log(this.state.products);;
  }
  render(){
  return (
    <div className="grid-container">
      <header className="header">
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        < div className="content">
            <div className="main">
              <Products products={this.state.products}></Products>
            </div>
            <div className="sidebar"> Cart items</div>
        </div>
      </main>
      <footer>All rights reserved</footer>
    </div>
  );
}
}

export default App;
