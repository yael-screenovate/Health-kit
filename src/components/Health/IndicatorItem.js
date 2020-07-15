import React from 'react';
import  './IndicatorItem.css';
import {connect} from 'react-redux';

class IndicatorItem extends React.Component {
  
    render() {
        return (
            <div className='IndicatorItem'>
                <div className='IndicatorIcon' >
                    {this.props.icon}
                </div>
                <div className='Indicatortype'>{this.props.Indicatortype}</div>
                <div className='Indicatorvalue'>{this.props.Indicatorvalue}</div>
            </div>            
        );
    };
}

const element = < IndicatorItem/ >;

export default connect(null, {} )(IndicatorItem);

