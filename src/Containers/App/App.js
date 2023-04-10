import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// Components 

import Eleve from '../../Components/Eleve/Eleve';
// function App() {
//   return (
//     <div className="App">
//     <h1>oliiiiiiiiiiiiviiiiiiiiiaaaaaaaaaa</h1>
//     </div>
//   );
// }


// fonction fléché pour creer un component
// const App = () =>{
//   return (
//         <div className="App">
//         <h1>oliiiiiiiiiiiiviiiiiiiiiaaaaaaaaaa</h1>
//         </div>
//       );
// }


// methode par utilisation de class 
class App  extends Component {
  state={
    eleves:[
      {nom :'Eva Dupont',
      moyenne :15,
      citation:"aller à l'ecole" 
    },
      {nom :'Timoté galaut',
      moyenne :5
     },

    ],
  }
  buttonClickedHandler =()=>{
    // console.log('click')
    // this.setState({
    //   eleves:[
    //     {nom :'ama Dupont',
    //     moyenne :15,
    //     citation:"aller à l'ecole" 
    //   },
    //     {nom :'Timoté galaut',
    //     moyenne :5
    //    },
    //   ]
    // });

    const nouveauSate = [...this.state.eleves];
    nouveauSate[0].nom = 'selom musk';
    this.setState({
      eleves :nouveauSate
    });
  }
  render(){
    return (
              <div className="App">
              <h1>oliiiiiiiiiiiiviiiiiiiiiaaaaaaaaaa</h1>
              <h2>me voiciiii</h2>
              <div>              
                <button onClick={this.buttonClickedHandler} type="">changer le prenom</button>
            </div>

              <Eleve 
               nom = "Eva Dupont "
               moyenne= "15/20">
              </Eleve>
              <Eleve nom = {this.state.eleves[0].nom} 
              moyenne= {this.state.eleves[0].moyenne}>

              {this.state.eleves[0].citation}

              </Eleve>

              {/* props{nom ="..." moyenne="..."} */}
              <Eleve nom = "Timothée Galaut " moyenne= "5/20"/>

              </div>
            );
  }
}


export default App;
