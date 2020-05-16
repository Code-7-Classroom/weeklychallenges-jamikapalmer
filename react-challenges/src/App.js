import React, {Component} from 'react';
import './App.css';
import Person from './basicInfo';

    class App extends Component{
      constructor(){
        super();

        this.state = {
          person: [
            {
            Name: "Rob Robot",
            Number: "7047565905",
            DOB: "08/10/1996"
            }
          ]
        }
      }
      render(){
        return <Person person={this.state.person} />

      }
    }





export default App;
