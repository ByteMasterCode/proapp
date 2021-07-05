import React from 'react';
import History from './components/History';
import MainPage from './components/MainPage';
import  './App.css'
import Services from './components/Services';
class App extends React.Component {
    
    componentDidMount(){
      
    }


  render() {
    return (
      <div className="Container">
        <div id="HorizantalBox">
        <MainPage />
        <History/>
        <Services/>
        </div>
        </div>
    
  );
  }
}


export default App;
