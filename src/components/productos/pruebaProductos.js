import React, { useState } from 'react'
import { useFetchProductos } from '../../hooks/useFetchProductos';


class ProductCategoryRow extends React.Component {
    render() {
      const category = this.props.category;
      return (
        <tr>
          <th colSpan="8">
            {category}
          </th>
        </tr>
      );
    }
  }
  
  class ProductRow extends React.Component {
    constructor(props){
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {    
      alert("hola");
    }

    render() {
      const product = this.props.product;
      const name = product.stock>0 ?
        product.nombre :
        <span style={{color: 'red'}}>
          {product.nombre}
        </span>;

        const stock = product.stock>0 ?
            <td>{product.stock}</td>:
            <td>NN</td>;

        

      return (
        <tr>
          <td>{product.idarticulo}</td>
          <td>{name}</td>
          <td>{product.precio}</td>
          {stock}
          <td>{product.descripcion}</td>
          <td>{product.estado.toString()}</td>
          <td>
            <button type="button" onClick={this.handleClick}>EDITAR</button>
          </td>
          <td>
            <button type="button" onClick={this.handleClick}>ELIMINAR</button>
          </td>
        </tr>
      );
    }
  }
  
  class ProductTable extends React.Component {
    render() {
      const filterText = this.props.filterText;
      const inStockOnly = this.props.inStockOnly;
  
      const rows = [];
      let lastCategory = null;
  
      this.props.products.forEach((product) => {
        if (product.nombre.indexOf(filterText) === -1) {
          return;
        }
        if (inStockOnly && !product.stock>0) {
          return;
        }
        if (product.categoria !== lastCategory) {
          console.log("======");
          console.log(product.categoria);
          rows.push(
            <ProductCategoryRow
              category={product.categoria}
              key={product.categoria} />
          );
        }
        rows.push(
          <ProductRow
            product={product}
            key={product.idarticulo}
          />
        );
        lastCategory = product.categoria;
      });
  
      return (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Descripción</th>
              <th>Estado</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  }
  
  class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleInStockChange = this.handleInStockChange.bind(this);
    }
    
    handleFilterTextChange(e) {
      this.props.onFilterTextChange(e.target.value);
    }
    
    handleInStockChange(e) {
      this.props.onInStockChange(e.target.checked);
    }
    
    render() {
      return (
        <form>
          <input
            type="text"
            placeholder="Search..."
            value={this.props.filterText}
            onChange={this.handleFilterTextChange}
          />
          <p>
            <input
              type="checkbox"
              checked={this.props.inStockOnly}
              onChange={this.handleInStockChange}
            />
            {' '}
            Only show products in stock
          </p>
        </form>
      );
    }
  }
  
  export const FilterableProductTable = () =>{
    
    const [filterText, setfilterText] = useState('');
    const [inStockOnly, setinStockOnly] = useState(false);

    const { data } = useFetchProductos( );

    console.log(data);

    const handleFilterTextChange = (filterText) => {
      setfilterText(filterText);
    }
    
    const handleInStockChange = (inStockOnly) =>{
      setinStockOnly(inStockOnly);
    }
  
      return (
        <div>
          <SearchBar
            filterText={filterText}
            inStockOnly={inStockOnly}
            onFilterTextChange={handleFilterTextChange}
            onInStockChange={handleInStockChange}
          />
          
          <ProductTable
            products={data}
            filterText={filterText}
            inStockOnly={inStockOnly}
          />
        </div>
      );
  
  }
  

  