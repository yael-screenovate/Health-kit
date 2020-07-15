import React from 'react';
import   './ActivityItem.css';
import {connect} from 'react-redux';
import CountUp from 'react-countup';

class ActivityItem extends React.Component {
    
    render() {
        return (
            <div className='activityItem'>
                <div className='textWrapper'>
                    <div className='value'>
                        <CountUp duration={5} decimals={this.props.dec} className='activityvalue' start={0} end={this.props.activityvalue}/>
                        <div className='activityvalue'>{this.props.unit}</div>
                    </div>
                    <div className='activitytype'>{this.props.activitytype}</div>
                </div>
                <div className='icon'>
                {this.props.icon}
                </div>
            </div>
        );
    };
}

const element = < ActivityItem/ >;

export default connect(null, {} )(ActivityItem);
