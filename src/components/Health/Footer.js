import React from 'react';
import  './Footer.css';
import InfoItem from './Infoitem.js'
import {connect} from 'react-redux';

class Footer extends React.Component {
  
    render() {
        return (
            <div className='footer'>
                <InfoItem title={'Gender'} subtitle={'Women'}/>
                <InfoItem title={'Blood Type'} subtitle={'AB+'}/>
                <InfoItem title={'Date Of Birth'} subtitle={'30/10/1996'}/>
                <InfoItem title={'Skin Type'} subtitle={'Dry'}/>
                <InfoItem title={'Uses Wheel Chair'} subtitle={'No'}/>
            </div>
        );
    };
}

const element = < Footer/ >;

export default connect(null, {} )(Footer);

