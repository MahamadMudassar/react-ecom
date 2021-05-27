import React, { Component } from 'react';
import formatCurrency from './utils';

class Products extends Component {
    render() {
        console.log("hi");
        console.log(this.props.products);
        return (

            <div>
                <ul className="products">
                {this.props.products.map(product=>
                <li key={product._id}>
                    <div className="product">
                        <a href={"#"+product._id}>
                            <img src={product.image} alt={product.title}></img>
                            <p className={product.title}></p>
                        </a>
                        <div className="product-price">
                            <div>{formatCurrency(product.price)}</div>
                            <button>Add to cart</button>
                        </div>
                    </div>

                </li>
                
                
                )}
                </ul>                
            </div>
        );
    }
}

export default Products;