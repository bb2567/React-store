import React from "react";
import axios from "../commons/axios";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ToolBox from "./ToolBox";
import Product from "./Product";
import Panel from "../components/Panel";
import AddInventory from '../components/AddInventory'

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      sourceProduct: [],
    };
  }

  componentDidMount() {
    axios.get("/products").then((response) => {
      this.setState({
        products: response.data,
        sourceProduct: response.data,
      });
    });
  }

  // 商品搜尋 將值傳到子元件Toolbox
  search = (text) => {
    console.log(text);
    // 1. get new Array (複製)
    let _products = [...this.state.sourceProduct];
    // 2. filter new Array
    _products = _products.filter((p) => {
      const matchArray = p.name.match(new RegExp(text, "gi"));
      return !!matchArray;
    });
    // 3.set  State
    this.setState({ products: _products });
  };

  toAdd = () => {
    Panel.open({
      component:AddInventory,
      callback:data =>{
        console.log('Products Data:', data)
      }
    });
  };

  render() {
    return (
      <>
        <ToolBox search={this.search} />
        <div className="products">
          <div className="columns is-multiline is-desktop">
            <TransitionGroup component={null}>
              {this.state.products.map((p) => {
                return (
                  <CSSTransition
                    classNames="product-fade"
                    timeout={300}
                    key={p.id}
                  >
                    <div className="column is-3" key={p.id}>
                      <Product product={p} />
                    </div>
                  </CSSTransition>
                );
              })}
            </TransitionGroup>
          </div>
          <button className="button is-primary add-btn" onClick={this.toAdd}>
            add
          </button>
        </div>
      </>
    );
  }
}

export default Products;
