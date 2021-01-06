import React from "react";
import axios from "../commons/axios";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ToolBox from "./ToolBox";
import Product from "./Product";
import Panel from "../components/Panel";
import AddInventory from "../components/AddInventory";

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      sourceProducts: [],
    };
  }

  componentDidMount() {
    axios.get("/products").then((response) => {
      this.setState({
        products: response.data,
        sourceProducts: response.data,
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
      // 從 AddInventory callback 回傳的data
      component: AddInventory,
      callback: (data) => {
        // 如果有資料就 使用 新增的商品加入商品列表
        if (data) {
          this.add(data);
        }
      },
    });
  };

  // 將新增的商品加入商品列表
  add = (product) => {
    const _products = [...this.state.products];
    _products.push(product);
    // 搜尋用
    const _sProducts = [...this.state.sourceProducts];
    _sProducts.push(product);

    this.setState({
      products: _products,
      sourceProducts: _sProducts,
    });
  };

  // update 更新修改後的商品資訊
  update = (product) => {
    const _products = [...this.state.products];
    // 取得索引
    const _index = _products.findIndex((p) => p.id === product.id);
    _products.splice(_index, 1, product);
    //
    const _sProducts = [...this.state.sourceProducts];
    const _sIndex = _sProducts.findIndex((p) => p.id === product.id);
    _sProducts.splice(_sIndex, 1, product);

    this.setState({
      products: _products,
      sourceProducts: _sProducts,
    });
  };

  // delete 更新刪除後的商品資訊
  delete = (id) => {
    const _products = this.state.products.filter((p) => p.id !== id);
    const _sProducts = this.state.sourceProducts.filter((p) => p.id !== id);
    this.setState({
      products: _products,
      sourceProducts: _sProducts,
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
                      <Product
                        product={p}
                        update={this.update}
                        delete={this.delete}
                      />
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
