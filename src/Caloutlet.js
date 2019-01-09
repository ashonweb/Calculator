import React,{Component} from 'react';
import Calinput from'./Calinput';
import Callayout from './Callayout';
import './App.css';
class Caloutlet extends Component {
  constructor(props){
    super(props)
    this.state = {
      val :'',
      valArray:[],
      answerArray:[],
    }
  }
  onChange = (inputVal) =>{
    let value = this.state.val;
    this.setState({
      val : value += inputVal,
    }, () => {
      let valueInput = this.state.val;
      console.log(valueInput);
      let valueArray = this.state.valArray.slice();
      valueArray.push(inputVal);
      console.log(valueArray);
      this.setState({
        valArray: valueArray
      })
    })
  }
  
  backevent = (valArray) => {
    let backArray = this.state.valArray.slice();
    //let answerbackArray = this.state.answerArray.slice();
    if(backArray !== [])
    {
     let i = backArray.slice(0,backArray.length-1);
     console.log(i);

      this.setState({
        val: i.join(''),
        valArray:i,        
      })
    }
    else{      
      this.setState({
        val: '',
      })
    }
  }

  evaluate = (val) => {    
    this.setState({
      valArray: [],
    })
    const answer = eval(this.state.val);    
    this.setState({
      val: answer,       
    })
  }

  onClear = () =>{
    let inputv = this.state.val;
  
    if(inputv === ''){
    alert("nothing to clear");
    return ;
    }
    else
    inputv = "";
    this.setState({
      val:inputv,
      valArray:[],
      answerArray:[],
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
          <Callayout onChange={this.onChange} 
          onClear={this.onClear} 
          backevent = {this.backevent}
          evaluate = {this.evaluate}/>
        </div>
      </div>
    )
  }
}
export default Caloutlet;
