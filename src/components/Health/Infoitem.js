import React from 'react';
import   './Infoitem.css';
import {connect} from 'react-redux';

class Infoitem extends React.Component {
  
    render() {
        return (
            <div className='infoItem'>
                <div className='title'>{this.props.title}</div>
                <div className='subtitle'>{this.props.subtitle}</div>
            </div>
        );
    };
}

const element = < Infoitem/ >;

export default connect(null, {})(Infoitem);
