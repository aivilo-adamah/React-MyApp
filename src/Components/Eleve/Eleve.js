//librairies
import React,{ Component } from 'react';
import './Eleve.css';

class Eleve extends Component {
    render(){
        return (
        <div className='eleve'>
            <h1>{this.props.nom}</h1>
            <p>Moyene :<b>{this.props.moyenne}</b> </p>
            <p>Age :{Math.floor(Math.random()*100)}</p>
            <i>{this.props.children}</i>

        </div>);
           
        
    }
}

// const Eleve = props=>{
//     return (
//                 <div className='eleve'>
//                      <h1>{props.nom}</h1>
//                      <p>Moyene :<b>{props.moyenne}</b> </p>
        
//                  </div>);
// }
export default Eleve;