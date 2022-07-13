import React, { Component } from 'react';

class App extends Component{

  // function message(){
    
  // }

  // Arrow Function 
  // () => {}

  message = () => {
    return <h2>Mensagem pela Arrow Function</h2>
  }

  choiceMessage = (msg) => {
    return <h2>{msg}</h2>
  }
  
  double = (num) =>{
    return <h2>{num * 10}</h2>
  }

  number = (numb) =>{
    return <h3>{numb}</h3>
  }

  ifElse = (Test) => {
    if(Test >= 0){
      return <h3>Número positivo</h3>
    }else{
      return <h3>Número negativo</h3>
    }
  }

  state = {
    projeto: "Quarto",
    altura: 3,
    largura: 5,
    lados: 4
  }

  calcArea = () => {
    return <h2>O valor do Calculo da área é {this.state.lados * this.state.lados}</h2>
  }

  render(){
    return(
      <div>
      <h1>Teste</h1>
      {this.message()}
      {this.choiceMessage("msg")}
      {this.double("10")}
      {this.double("100")}
      {this.number(50)}
      {this.ifElse(10)}
      <h1>Nosso projeto é o {this.state.projeto}</h1>
      {this.calcArea()}
      </div>
    )
  }
}

export default App;
