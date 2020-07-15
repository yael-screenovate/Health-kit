import React from 'react';
import  './App.css';
import Footer from '../components/Health/Footer.js'
import Activity from '../components/Health/Activity.js'
import Indicators from '../components/Health/Indicators.js'
import SelfCare from '../components/Health/SelfCare.js'
import Body from '../components/Health/Body.js'
import Nutrition from '../components/Health/Nutrition.js'
import Lab from '../components/Health/Lab.js'
import {connect} from 'react-redux';

class App extends React.Component {
  
   componentDidMount() {
     document.title = 'Health Dashboard';
  }

  render() {
    return (
     <div className='App'>
       <div className='wrapper'>
         <Activity/>
         <div className='middlewrapper'>
          <Indicators/>
          <Body/>
         </div>
         <div className='middlewrapper'>
          <Lab/>
          <SelfCare/>
         </div>
         <Nutrition/>
      </div>
      <div><Footer/></div>
    </div>
    );
  }
}

export default connect(null, {} )(App);

