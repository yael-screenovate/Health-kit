import * as React from 'react';
import {connect} from 'react-redux';
import * as style from '../FaceLift/Facelift.css';


export class FaceLift extends React.Component {

    render() {
        return (
         
            <div className={style.parent}>
              <div  className={style.child_1}>
                <div className={style.child_1_1}>
                  <div className={style.button_container}>1</div>
                </div>
                <div className={style.child_1_2}>
                  <div className={style.button_container}>
                  </div>
                  <div className={style.button_container}>2</div>
                </div>
                <div className={style.child_1_3}>
                  <div className={style.button_container}>1</div>
                  <div className={style.button_container}>2</div>
                  <div className={style.button_container}>3</div>
                </div>
              </div>
              <div className={style.child_2}>
                <div className={style.child_2_1}> <oring/> </div>
                <div className={style.child_2_2}>
                  <div className={style.button_container}>
                  </div>
                  <div className={style.button_container}>
                  </div>
                </div>
              </div>
              <div className={style.child_3}>
                <div className={style.child_3_0}></div>
                <div className={style.child_3_1}>
                  <div className={style.long}>Drag files to phone</div>
                </div>
                <div className={style.child_3_0}>
                  <div className={style.demo_button_sp}>
                  </div>
                </div>
              </div> 
            </div>
           
                  );
    }
}

const element = < FaceLift/ >;

export default FaceLift;
