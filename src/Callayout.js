import React,{Component} from 'react';
import './App.css';
class Callayout extends Component {
  render(){
    return(
      <div className="layout">
        <div className="row">
          <div className="col-lg-3 buttonclass" onClick={() => this.props.onClear()}>
            <div className="item">C</div>            
          </div>
          <div className="col-lg-3 buttonclass" onClick={() => this.props.backevent()}>
            <div className="item">B</div>
          </div>
          <div className="col-lg-3 buttonclass" onClick={() => this.props.onChange(0)}>
            <div className="item">0</div>
          </div>
          <div className="col-lg-3 buttonclass" onClick={() => this.props.onChange("%")}>
            <div className="item">%</div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 buttonclass" onClick={() => this.props.onChange(1)}>
            <div className="item">1</div> 
            
          </div>
          <div className="col-lg-3 buttonclass" onClick={() => this.props.onChange(2)}>
          <div className="item">2</div> 
            
          </div>
          <div className="col-lg-3 buttonclass" onClick={() => this.props.onChange(3)}>
          <div className="item">3</div> 
            
          </div>
          <div className="col-lg-3 buttonclass" onClick={()=>this.props.onChange("*")}>
          <div className="item">*</div> 
            
          </div>
        </div>
        <div className="row">
        <div className="col-lg-3 buttonclass" onClick={() => this.props.onChange(4)}>
        <div className="item">4</div> 
            
          </div>
          <div className="col-lg-3 buttonclass" onClick={() => this.props.onChange(5)}>
          <div className="item">5</div> 
            
          </div>
          <div className="col-lg-3 buttonclass" onClick={() => this.props.onChange(6)}>
          <div className="item">6</div> 
            
          </div>
          <div className="col-lg-3 buttonclass" onClick={() => this.props.onChange("-")}>
          <div className="item">-</div> 
            
          </div>  
        </div>
        <div className="row">
        <div className="col-lg-3 buttonclass" onClick={() => this.props.onChange(7)}>
            <div className="item">7</div> 
          </div>
          <div className="col-lg-3 buttonclass" onClick={() => this.props.onChange(8)}>
            <div className="item">8</div> 
          </div>
          <div className="col-lg-3 buttonclass" onClick={() => this.props.onChange(9)}>
            <div className="item">9</div>  
          </div>
          <div className="col-lg-3 buttonclass" onClick={() => this.props.onChange("+")} >
          <div className="item">+</div> 
          </div>
        </div>
        <div className="row">
        <div className="col-lg-4 buttonclass" onClick={() =>this.props.onChange(".")}>
        <div className="item">.</div> 
          </div>
          <div className="col-lg-4 buttonclass" onClick={this.props.evaluate}>
          <div className="item">=</div> 
          </div>
        </div>
      </div>
    )
  }
}

export default Callayout;