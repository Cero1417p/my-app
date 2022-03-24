import React from "react";

export class ProductosForm extends React.Component {
    

    constructor(props){
        super(props);
        this.state={
            nombre: '',
            descripcion:'',
            codigo:'',
            estado:true,
            precio: 0.00,
            stock: 0,
        };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const target = event.target;
        console.log(target);
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState(
            {
                [name] : value
            }
        );

    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.estado);
      event.preventDefault();
    }
  
  
    render(){
        return (
            <form onSubmit={this.handleSubmit} >

                <div className="mb-3"> <h1>Medicamentos</h1> </div>


                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input 
                    name="nombre"
                    type="text" 
                    className="form-control" 
                    id="nombre" 
                    aria-describedby="emailHelp"
                    value={this.state.nombre}
                    onChange={this.handleChange}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
    
                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">Descripción</label>
                    <input 
                    name="descripcion"
                    type="text" 
                    className="form-control" 
                    id="descripcion" 
                    aria-describedby="emailHelp"
                    value={this.state.descripcion}
                    onChange={this.handleChange}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
    
                <div className="mb-3">
                    <label htmlFor="codigo" className="form-label">Código de producto</label>
                    <input
                    name="codigo"
                    type="text" 
                    className="form-control" 
                    id="codigo" 
                    aria-describedby="emailHelp"
                    value={this.state.codigo}
                    onChange={this.handleChange}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
    
                <div className="mb-3 form-check">
                    <label htmlFor="estado" className="form-label">Estado de producto (Activo/Inactivo)</label>
                    <input
                    name="estado"
                    type="checkbox" 
                    className="form-check-input" 
                    id="estado"
                    checked={this.state.estado}
                    onChange={this.handleChange}/>
                </div>
    
                <div className="mb-3">
                    <label htmlFor="precio" className="form-label">Precio</label>
                    <input 
                    name="precio"
                    type="number" 
                    className="form-control" 
                    id="precio" 
                    value={this.state.precio}
                    onChange={this.handleChange}/>
                </div>
    
                <div className="mb-3">
                    <label htmlFor="stock" className="form-label">Stock</label>
                    <input 
                    name="stock"
                    type="number" 
                    className="form-control" 
                    id="stock" 
                    value={this.state.stock}
                    onChange={this.handleChange}/>
                </div>
             
              
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          );
    }

  }
