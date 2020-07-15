import React from 'react';
import  './Nutrition.css';
import NutritionItem from './NutritionItem.js'
import {connect} from 'react-redux';

class Nutrition extends React.Component {
  
    render() {
        return (
            <div className='Nutrition'>
                <span className='header'>Your Nutrition Tody:</span>
                <NutritionItem Nurtionvalue={'1278'} Nurtiontype={'Calories'}
                    icon={<svg enable-background="new 0 0 24 24" height="40px" viewBox="0 0 24 24" fill="rgb(5, 230, 218)" width="40px" ><g><path d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M12,22C6.5,22,2,17.5,2,12S6.5,2,12,2s10,4.5,10,10   S17.5,22,12,22z"/><path d="M7.5,10h2C9.8,10,10,9.8,10,9.5S9.8,9,9.5,9h-2C7.2,9,7,9.2,7,9.5S7.2,10,7.5,10z"/><path d="M14.5,10h2c0.3,0,0.5-0.2,0.5-0.5S16.8,9,16.5,9h-2C14.2,9,14,9.2,14,9.5S14.2,10,14.5,10z"/><path d="M7,13H6c0,3.3,2.7,6,6,6s6-2.7,6-6h-1H7z M12,18c-2.4,0-4.4-1.7-4.9-4h9.8C16.4,16.3,14.4,18,12,18z"/></g></svg>}/>
                <NutritionItem Nurtionvalue={'807 cal'} Nurtiontype={'Carbohydrates'}
                    icon={<svg enable-background="new 0 0 24 24" height="40px" fill="rgb(5, 230, 218)" viewBox="0 0 24 24" width="40px"><g><path d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M12,22C6.5,22,2,17.5,2,12S6.5,2,12,2s10,4.5,10,10   S17.5,22,12,22z"/><circle cx="8.5" cy="9.5" r="1.5"/><circle cx="15.5" cy="9.5" r="1.5"/><path d="M12,14c-2.8,0-5.2,1.6-6.3,4h12.6C17.2,15.6,14.8,14,12,14z M7.6,17c1.1-1.2,2.7-2,4.4-2s3.3,0.8,4.4,2H7.6z"/></g></svg>}/>
                <NutritionItem Nurtionvalue={'17 grams'} Nurtiontype={'Fiber'}
                    icon={<svg enable-background="new 0 0 24 24" height="40px" id="Layer_1" version="1.1" fill="rgb(5, 230, 218)" viewBox="0 0 24 24" width="40px" ><g><path d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M12,22C6.5,22,2,17.5,2,12S6.5,2,12,2s10,4.5,10,10   S17.5,22,12,22z"/><circle cx="8.5" cy="9.5" r="1.5"/><circle cx="15.5" cy="9.5" r="1.5"/><path d="M12,19c2.8,0,5.2-1.6,6.3-4H5.7C6.8,17.4,9.2,19,12,19z M16.4,16c-1.1,1.2-2.7,2-4.4,2s-3.3-0.8-4.4-2H16.4z"/></g></svg>}/>
                <NutritionItem Nurtionvalue={'78 cal'} Nurtiontype={'Sugar'}
                    icon={<svg enable-background="new 0 0 24 24" height="40px" viewBox="0 0 24 24" fill="rgb(5, 230, 218)" width="40px" ><g><path d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M12,22C6.5,22,2,17.5,2,12S6.5,2,12,2s10,4.5,10,10   S17.5,22,12,22z"/><path d="M7.5,10h2C9.8,10,10,9.8,10,9.5S9.8,9,9.5,9h-2C7.2,9,7,9.2,7,9.5S7.2,10,7.5,10z"/><path d="M14.5,10h2c0.3,0,0.5-0.2,0.5-0.5S16.8,9,16.5,9h-2C14.2,9,14,9.2,14,9.5S14.2,10,14.5,10z"/><path d="M7,13H6c0,3.3,2.7,6,6,6s6-2.7,6-6h-1H7z M12,18c-2.4,0-4.4-1.7-4.9-4h9.8C16.4,16.3,14.4,18,12,18z"/></g></svg>}/>
                <NutritionItem Nurtionvalue={'84 cal'} Nurtiontype={'Monounsaturated Fat'}
                    icon={<svg enable-background="new 0 0 24 24" height="40px" fill="rgb(5, 230, 218)" viewBox="0 0 24 24" width="40px"><g><path d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M12,22C6.5,22,2,17.5,2,12S6.5,2,12,2s10,4.5,10,10   S17.5,22,12,22z"/><circle cx="8.5" cy="9.5" r="1.5"/><circle cx="15.5" cy="9.5" r="1.5"/><path d="M12,14c-2.8,0-5.2,1.6-6.3,4h12.6C17.2,15.6,14.8,14,12,14z M7.6,17c1.1-1.2,2.7-2,4.4-2s3.3,0.8,4.4,2H7.6z"/></g></svg>}/>
                <NutritionItem Nurtionvalue={'29 grams'} Nurtiontype={'Protein'}
                    icon={<svg enable-background="new 0 0 24 24" height="40px" id="Layer_1" version="1.1" fill="rgb(5, 230, 218)" viewBox="0 0 24 24" width="40px" ><g><path d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M12,22C6.5,22,2,17.5,2,12S6.5,2,12,2s10,4.5,10,10   S17.5,22,12,22z"/><circle cx="8.5" cy="9.5" r="1.5"/><circle cx="15.5" cy="9.5" r="1.5"/><path d="M12,19c2.8,0,5.2-1.6,6.3-4H5.7C6.8,17.4,9.2,19,12,19z M16.4,16c-1.1,1.2-2.7,2-4.4,2s-3.3-0.8-4.4-2H16.4z"/></g></svg>}/>
            </div>
        );
    };
}

const element = < Nutrition/ >;

export default connect(null, {})(Nutrition);

