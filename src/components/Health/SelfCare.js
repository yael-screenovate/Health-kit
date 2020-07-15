import React from 'react';
import  './SelfCare.css';
import {connect} from 'react-redux';

class selfcare extends React.Component {
  
    render() {
        const checkIcon  = <svg height="17px" viewBox="0 0 512 512" width="17px" ><path d="m512 58.667969c0-32.363281-26.304688-58.667969-58.667969-58.667969h-394.664062c-32.363281 0-58.667969 26.304688-58.667969 58.667969v394.664062c0 32.363281 26.304688 58.667969 58.667969 58.667969h394.664062c32.363281 0 58.667969-26.304688 58.667969-58.667969zm0 0" fill="yellow"/><path d="m385.75 171.585938c8.339844 8.339843 8.339844 21.820312 0 30.164062l-138.667969 138.664062c-4.160156 4.160157-9.621093 6.253907-15.082031 6.253907s-10.921875-2.09375-15.082031-6.253907l-69.332031-69.332031c-8.34375-8.339843-8.34375-21.824219 0-30.164062 8.339843-8.34375 21.820312-8.34375 30.164062 0l54.25 54.25 123.585938-123.582031c8.339843-8.34375 21.820312-8.34375 30.164062 0zm0 0" fill="#232b2b"/></svg>
        return (
            <div className='selfcare'>
                <span className='header'>Your Self care Tody:</span>
                <div>
                    <p>Tooth Brushing</p>
                    <div className='IconWrapper'>{checkIcon}{checkIcon}</div>
                </div>
                <div>
                    <p>Hand Washing </p>
                    <div className='IconWrapper'>{checkIcon}{checkIcon}{checkIcon}</div>
                </div>
                <div>
                    <p>Mindful Session</p>
                    <div className='IconWrapper'>{checkIcon}</div>
                </div>
                <div>
                    <p>Sleep (8H)</p>
                    <div className='IconWrapper'>{checkIcon}</div>
                </div>
            </div>
        );
    };
}


const element = < selfcare/ >;

export default connect(null, {})(selfcare);

