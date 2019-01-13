
import React , {Component} from 'react';
import './App.css';
class Calinput extends Component {
  render(){
    return(
      <div>
        <input className="inputclass" type="text" value={this.props.val} onChange={this.props.onChange} disabled={true} required />
        {/* <div>
          {
            this.props.valArr.map((v, i) => <span key={i}>{v}</span>)
          }
        </div> */}
      </div>
    )
  }
}

export default  Calinput;
