import React, { useState } from 'react';
import './App.css';
//import React, {usestate} from 'react';
//import {link} from 'react-router';

function Implhook(){
  const [click,setClick]=useState(0);
  
  return (
    <div>
      <p>Click to order</p>
      <button onClick={()=>setClick('1')}>Order</button>
      <p>Order No :{click}</p>
    </div>
  );
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={people:'',
                value:'cheese',
                showmessage:false,
                message:'',
                timeup:'10 seconds',
                message_price:''
  };
                
    this.handlechange=this.handlechange.bind(this);
    this.handletoppingschange=this.handletoppingschange.bind(this);
    this.handlecalculation=this.handlecalculation.bind(this);
    
  }
  handlechange(event){
    this.setState({people:event.target.value});
    
  }
  handletoppingschange(event){
  this.setState({value:event.target.value});
  }
  handlecalculation(event){
    
    //alert("done :"+this.state.people+" "+this.state.value);
    this.setState({showmessage:true});
    let no_of_people=this.state.people;
    let topping=this.state.value;
    let pizza_price=0;
   // alert(topping);
    if(no_of_people<=1)
    {
      pizza_price=5;
      this.setState({message:"Needs 1 small pizza"});
    }
    else if(no_of_people%3===0)
    {
      let num=no_of_people/3;
      pizza_price=num*7;
      this.setState({message:"Needs"+num+" medium pizza"});
    }
    else if(no_of_people%4===0)
    {
      let num=no_of_people/4;
      pizza_price=num*10;
      this.setState({message:"Needs "+num+" large pizza"});
    }
    else{
      let num=~~(no_of_people/3);
      let rem=~~(no_of_people%3);
      pizza_price=(num*7)+(rem*5);
      this.setState({message:"Needs"+num+" medium pizzas and "+rem+"small pizzas"});
    }
    //event.preventdefault();
    let topping_price=0;
    let total_price=0;
    if(topping==='cheese'){
      topping_price=2;
    }
    if(topping==='pepperoni'){
      topping_price=6;
    }
    if(topping==='onion'){
      topping_price=0.5;
    }
    if(topping==='olives'){
      topping_price=0.25;
    }
    total_price=pizza_price+topping_price;
    this.setState({message_price:"total price : "+total_price});
  }
 /* handleclick(){
    alert("here");
   // window.open("C:/Users/Naimur/Desktop/workspace/pizzacentre/src/implhook.js");
  }*/
  componentDidMount(){
    this.timeout=setTimeout(()=>{this.setState({value:null})},10000)
    
  }
  componentWillMount(){
    clearTimeout(this.timeout);
    
  }
  render(){
  return(
    <div className="App">
      <div className="app-title">
        <h1>Pizza Corner</h1>
      </div>
      {!this.state.showmessage?
      <form onSubmit={this.handlecalculation}>
        <label>No. of people:
          <input type="number" value={this.state.people} onChange={this.handlechange}/>
        </label>
        <label>Pick your toppings
          <select value={this.state.value} onChange={this.handletoppingschange}>
            <option value="cheese">Cheese</option>
            <option value="pepperoni">Pepperoni</option>
            <option value="Onion">Onion</option>
            <option value="Olive">Olive</option>

          </select>
        </label>
        <input type="submit" value="Submit"/>
      </form>
      :
      <p>{this.state.message} and the  
        {this.state.message_price}</p>
        //<link to="" classname="">hello</link>
      
      }
      <p value={this.state.timeup}>TimeOut in {this.state.timeup}</p>
      <Implhook/>
      
      <div>
        <ul>Topping
          <li>Cheese 2$ </li>
          <li>Pepperoni 6$</li>
          <li>Onion 0.5$</li>
          <li>Olives 0.25$</li>
        </ul>
      </div>
      <div>
        <ul>pizza
          <li>large 10$ feeds 4 people </li>
          <li>medium 7$ feeds 3 people</li>
          <li>Small 5$ feeds 1 person</li>
        </ul>
      </div>
    </div>
  )
  }
}


export default App;
