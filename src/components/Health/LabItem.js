import React from 'react';
import  './LabItem.css';
import {connect} from 'react-redux';

class LabItem extends React.Component {
  
    render() {
        return (
            <div className='LabItem'>
                <p>{this.props.labItemName}{this.props.value}</p>
                <div className='valueWrapper'>
                    <p>{this.props.min}</p>
                    <input type="range"
                    min={this.props.min}
                    max={this.props.max}
                    value={this.props.value}
                    class="slider"/>
                    <p>{this.props.max}</p>
                </div>
            </div>
        );
    };
}

const element = < LabItem/ >;

export default connect(null, {})(LabItem);

