import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import axios from 'axios';
import React from 'react';

const api = axios.create({
  baseURL: 'http://localhost:3000/cards/all'
})


class App extends Component {
  
  state = {
    cards: []
  }

  constructor() {
    super();
    this.getCards();
  }
  
  

  listview = async () => {
    try  {
      console.log('4356789')
      let data = await api.get('/').then(({ data }) => data);
      this.setState({ cards: data })
      
      return data
    } catch (err) {
      console.log(err)
    }
   
  }

  getCards = async () => {
    try  {
      let data = await api.get('/').then(({ data }) => data);
      this.setState({ cards: data })
      return data
    } catch (err) {
      console.log(err)
    }
  }
  

  
  render() {
  return (
    
    <div className="App">
      <header className="App-header">
        
        <img  src='https://ludex.com/wp-content/uploads/2022/04/LUDEX-Wordmark-OnDark.png' className="logo" alt="logo" />
        
        
      </header>

      <span>
        <h1> ebay database</h1>
        <div className='input'>
          <p>URL:  <input type="url" id="userInput" /><button type='button'>ENTER</button></p>
        </div>
        
        
          
        
        <button className='btn' ><i className='fa-bars'></i>List</button>
        <button className="btn active" ><i className="fa fa-th-large"></i>Grid</button>
  
        <div className="wrapper">

       
          <ul>
              
              {this.state.cards.map(card => <li key={card.id}>
              <div className='images'>
                <a href={card.image}><img src={card.image} alt='123'></img></a>
              </div>
              <div className='titles'>
                <h3 className='title'>
                  {card.title}
                </h3>
              </div>
              
              <div className='prices'>
                <p className='price'>
                  

                  Price: {card.price}
                </p>
              </div>
              
              </li> )}
          </ul>
        
        
        </div>
         
        

        
        {/* <ul>
          {this.state.cards.map(card => <li key={card.id}>
  
            {card.title} {card.price}

          </li> )} 
          {this.state.cards.map(card => <li key={card.id}>{card.price}</li>)}
        </ul> */}
      </span>
    </div>
  );
  }
}

export default App;
