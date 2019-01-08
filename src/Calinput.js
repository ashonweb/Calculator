
import React , {Component} from 'react';
import './App.css';
class Calinput extends Component {
  render(){
    return(
      <div>
        <input class="inputclass" type="text" value={this.props.val} onChange={this.props.onChange} required />
      </div>
    )
  }
}

export default  Calinput;
