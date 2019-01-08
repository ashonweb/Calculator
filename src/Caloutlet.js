import React,{Component} from 'react';
import Calinput from'./Calinput';
import Callayout from './Callayout';
import './App.css';
class Caloutlet extends Component {
  constructor(props){
    super(props)
    this.state = {
      val :'',
    }
  }
  onChange = (inputVal) =>{
   this.setState({
      val : inputVal,
    })
    console.log(inputVal);
  }
  onClear = () =>{
    let inputv = this.state.val;
    if(inputv === ''){
    alert("nothing to clear");
    return ;
    }
    else
    inputv = 0;
    this.setState({
      val:inputv
    })

  }
  render() {
    return(
      <div className="caloutlet">
        <div className="inputcal">
          <Calinput 
          val = {this.state.val}
          onChange ={this.onChange}
          />
        </div>
        <div>
          <Callayout onChange={this.onChange} onClear={this.onClear} />
        </div>
      </div>
    )
  }
}
export default Caloutlet;
