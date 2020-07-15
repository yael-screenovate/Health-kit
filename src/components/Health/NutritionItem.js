import React from 'react';
import {connect} from 'react-redux';
import  './NutritionItem.css';

class NutritionItem extends React.Component {
  
    render() {
        return (
            <div className='NutritionItem'>
                <div className='textWrapper'>
                <div className='Nurtionvalue'>{this.props.Nurtionvalue}</div>
                <div className='Nurtiontype'>{this.props.Nurtiontype}</div>                    </div>
                <div className='icon'>
                    {this.props.icon}
                </div>
            </div>
        );
    };
}

const element = < NutritionItem/ >;

export default connect(null, {})(NutritionItem);
