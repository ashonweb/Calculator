import React,{Component} from 'react';
import './App.css';
class Callayout extends Component {
  render(){
    return(
      <div class="layout">
        <div class="row">
          <div class="col-lg-4 buttonclass" onClick={() => this.props.onClear()}>
            C
          </div>
          <div class="col-lg-4 buttonclass" onClick={() => this.props.onChange()}>
            B
          </div>
          <div class="col-lg-4 buttonclass" onClick={() => this.props.onChange(0)}>
            0
          </div>
          <div class="col-lg-4 buttonclass" onClick={() => this.props.onChange("%")}>
            %
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 buttonclass" onClick={() => this.props.onChange(1)}>
            1
          </div>
          <div class="col-lg-4 buttonclass" onClick={() => this.props.onChange(2)}>
            2
          </div>
          <div class="col-lg-4 buttonclass" onClick={() => this.props.onChange(3)}>
            3
          </div>
          <div class="col-lg-4 buttonclass" onClick={()=>this.props.onChange("*")}>
            *
          </div>
        </div>
        <div class="row">
        <div class="col-lg-4 buttonclass" onClick={() => this.props.onChange(4)}>
            4
          </div>
          <div class="col-lg-4 buttonclass" onClick={() => this.props.onChange(5)}>
            5
          </div>
          <div class="col-lg-4 buttonclass" onClick={() => this.props.onChange(6)}>
            6
          </div>
          <div class="col-lg-4 buttonclass" onClick={() => this.props.onChange("-")}>
            -
          </div>  
        </div>
        <div class="row">
        <div class="col-lg-4 buttonclass" onClick={() => this.props.onChange(7)}>
            7
          </div>
          <div class="col-lg-4 buttonclass" onClick={() => this.props.onChange(8)}>
            8
          </div>
          <div class="col-lg-4 buttonclass" onClick={() => this.props.onChange(9)}>
            9
          </div>
          <div class="col-lg-4 buttonclass" onClick={() => this.props.onChange("+")} >
            +
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 buttonclass" onClick={() => this.props.onChange("=")}>
            =
          </div>
        </div>
      </div>
    )
  }
}

export default Callayout;