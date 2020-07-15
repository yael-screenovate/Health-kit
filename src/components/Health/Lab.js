import React from 'react';
import  './Lab.css';
import LabItem from './LabItem.js'
import {connect} from 'react-redux';

class Lab extends React.Component {
  
    render() {
        return (
            <div className='Lab'>
                <span className='header'>Your Lab & Test Results:</span>
                <LabItem labItemName={'BloodAlcoholContent:'} min={0} max={0.5} value={0.15}/>
                <LabItem labItemName={'Glucose:'} min={0} max={10} value={6}/>
                <LabItem labItemName={'Insulin Delivery:'} min={5} max={25} value={8}/>
                <LabItem labItemName={'Inhaler Usage:'} min={0} max={8} value={0}/>
                <LabItem labItemName={'FVC:'} min={0} max={6} value={3.7}/>
            </div>
        );
    };
}

const element = < Lab/ >;

export default connect(null, {})(Lab);

