import React,{Component} from 'react';
import './estilo.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      textoFrase:''
    };
    this.frases=['Siga seu coração','A vida é curta', 
  'Quem acredita sempre alcança','Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
'Não espere por uma crise para descobrir o que é importante em sua vida.','Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar.',
'Conhece-te a ti mesmo e conhecerás o universo e os deuses.','Toda a infelicidade dos homens provém da esperança.',
'Não há nada bom nem mau a não ser estas duas coisas: a sabedoria que é um bem e a ignorância que é um mal.'];

  this.quebraBiscoito=this.quebraBiscoito.bind(this);
  }

  quebraBiscoito(){
    let state=this.state;
    let num=Math.floor(Math.random()*this.frases.length);
    state.textoFrase='"' + this.frases[num] + '"'
    this.setState(state);

  }
  render(){
    return(
      <div className="container">
        <img src={require('./assets/biscoito.png')} className='img'/>
        <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
        <h3 className='textoFrase'>{this.state.textoFrase}</h3>
      </div>
    );
  }
}

class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    );
}
}

export default App;
