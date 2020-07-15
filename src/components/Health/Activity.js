import React from 'react';
import  './Activity.css';
import ActivityItem from './ActivityItem.js'
import {connect} from 'react-redux';

class Activity extends React.Component {

    render() {
        return (
            <div className='activity'>
                <span className='header'>Your Activity Tody:</span>
                <ActivityItem activityvalue={'4'} activitytype={'flights'} dec={0}  icon={<svg width="40px" height="40px" viewBox="0 0 48 48"><path fill="rgb(243, 6, 125)" id="i-442" d="M47,1v2H33v15H18v15H3v14H1V31h15V16h15V1H47z"/> <use x="0" y="0"/></svg>}/>
                <ActivityItem activityvalue={'1.3'} unit={'km'} dec={1} activitytype={'Biking'} icon={<svg width="55px" height="55px" id="Layer_1" data-name="Layer 1" viewBox="0 0 120 120"><path fill="rgb(243, 6, 125)" class="cls-1" d="M91.81,55.9a13.67,13.67,0,0,0-4.93.93L79.75,41.32c1.58-.44,3.69-1.28,4.36-2.69A2.38,2.38,0,0,0,84,36.36c-1.23-2.16-5.8-3-6.7-3.12h-.11a1,1,0,0,0-1,1c0,.75.8,1,.8,1,1.8.29,4.71,1.16,5.27,2.14.14.25.09.35.06.42-.34.71-2.1,1.38-3.61,1.76a1,1,0,0,0-1-.05h0a1.06,1.06,0,0,0-.52,1.4l2,4.25H51.53l-.08,0-1.39-3,7.31-2.26a2.57,2.57,0,0,0-2.44-1.81H45.52a2.57,2.57,0,1,0,0,5.13h1.12L48,42.76,49.6,46.2,39.74,58.29A13.51,13.51,0,0,0,32,55.9,13.66,13.66,0,1,0,45.65,70.62H59.18a2.63,2.63,0,1,0,4.76-2.21L80.53,48.07,85,57.75a13.64,13.64,0,1,0,6.84-1.85ZM40.12,61.16a11.69,11.69,0,0,1,3.53,7.34H34.13ZM32,81.22a11.66,11.66,0,1,1,6.44-21.38l-7.35,9a1,1,0,0,0-.15.59s0,0,0,.07v.12a1,1,0,0,0,1,1H43.65A11.66,11.66,0,0,1,32,81.22ZM59.18,68.5H45.65a13.65,13.65,0,0,0-4.27-8.89l9.2-11.28,9,19.56A2.44,2.44,0,0,0,59.18,68.5Zm3.15-1.45a2.55,2.55,0,0,0-.74-.12h-.13L52.41,47.25H78.48ZM91.81,81.22a11.65,11.65,0,0,1-6-21.65L90.6,70a1.06,1.06,0,1,0,1.92-.88l-4.8-10.46a11.55,11.55,0,0,1,4.09-.75,11.66,11.66,0,0,1,0,23.32Z"/></svg>}/>
                <ActivityItem activityvalue={'0.4'}  unit={'km'} dec={1} activitytype={'running'} icon={<svg width="40px" height="40px" viewBox="0 0 16 22" version="1.1"><g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">    <g id="Rounded" transform="translate(-308.000000, -3123.000000)"><g id="Maps" transform="translate(100.000000, 3068.000000)"><g id="-Round-/-Maps-/-directions_run" transform="translate(205.000000, 54.000000)"><g><polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon> <path d="M13.49,5.48 C14.59,5.48 15.49,4.58 15.49,3.48 C15.49,2.38 14.59,1.48 13.49,1.48 C12.39,1.48 11.49,2.38 11.49,3.48 C11.49,4.58 12.39,5.48 13.49,5.48 Z M10.32,17.48 L10.89,14.98 L12.99,16.98 L12.99,21.98 C12.99,22.53 13.44,22.98 13.99,22.98 C14.54,22.98 14.99,22.53 14.99,21.98 L14.99,16.34 C14.99,15.79 14.77,15.27 14.37,14.89 L12.89,13.48 L13.49,10.48 C14.56,11.72 16.11,12.61 17.85,12.89 C18.45,12.98 18.99,12.5 18.99,11.89 C18.99,11.4 18.63,10.99 18.14,10.91 C16.62,10.66 15.36,9.76 14.69,8.58 L13.69,6.98 C13.29,6.38 12.69,5.98 11.99,5.98 C11.69,5.98 11.49,6.08 11.19,6.08 L7.21,7.76 C6.47,8.08 5.99,8.8 5.99,9.61 L5.99,11.98 C5.99,12.53 6.44,12.98 6.99,12.98 C7.54,12.98 7.99,12.53 7.99,11.98 L7.99,9.58 L9.79,8.88 L8.19,16.98 L4.27,16.18 C3.73,16.07 3.2,16.42 3.09,16.96 L3.09,17 C2.98,17.54 3.33,18.07 3.87,18.18 L7.98,19 C9.04,19.21 10.08,18.54 10.32,17.48 Z" id="🔹-Icon-Color" fill="rgb(243, 6, 125)"></path></g></g> </g> </g></g></svg>}/>
                <ActivityItem activityvalue={'2'} dec={0} unit={'km'} activitytype={'swimming'} icon={<svg width="40px" height="40px" viewBox="0 0 15 15"><path fill="rgb(243, 6, 125)" d="M10.1113,2C9.9989,2,9.6758,2.1465,9.6758,2.1465L6.3535,3.8262&#xA;&#x9;C5.9111,4.0024,5.7358,4.7081,6.002,5.0605l0.9707,1.4082L3.002,8.498L5,9.998l2.502-1.5l2.5,1.5l1.002-1.002l-3-4l2.5566-1.5293&#xA;&#x9;c0.5286-0.2662,0.4434-0.7045,0.4434-0.9707C10.9999,2.2861,10.6437,2,10.1113,2z M12.252,5C11.2847,5,10.5,5.7827,10.5,6.75&#xA;&#x9;s0.7847,1.752,1.752,1.752s1.75-0.7847,1.75-1.752S13.2192,5,12.252,5z M2.5,10L0,11.5V13l2.5-1.5L5,13l2.502-1.5l2.5,1.5L12,11.5&#xA;&#x9;l3,1.5v-1.5L12,10l-1.998,1.5l-2.5-1.5L5,11.5L2.5,10z"/></svg>}/>
                <ActivityItem activityvalue={'786'} dec={0} activitytype={'steps'} icon={<svg x="0px" y="0px"viewBox="0 0 150 150" width="50px" height="50px" fill="rgb(243, 6, 125)" ><path d="M72.7,105.7c-19.2,0-40.7-0.2-49.5-0.3c-3.2,0-5.7-2.6-5.7-5.8v-5c-1-1.2-2.8-4.3-3-11.1c-0.2-8.5,1.6-25.1,1.7-25.9c0.2-2.7,2.4-7.9,9.4-7.5c2.6,0.2,4.4,1.1,5.3,2.7c1,1.7,0.6,3.8,0.1,5.2l16.2,5.8l14.4-13.4c1.9-1.7,4.5-2.3,6.9-1.3l56.8,21.6c2,0.2,16.3,2.3,17.6,11.6c1,7.7,0.8,15.2-8.1,17.9c-1,0.3-1.9,0.6-2.9,0.9c-5.7,1.8-11.6,3.7-28.6,4.3C96.8,105.6,85.3,105.7,72.7,105.7z M24.7,53.1c-5,0-5.5,4.3-5.6,4.8c0,0.2-1.9,17.2-1.6,25.5c0.2,7.4,2.4,9.5,2.5,9.5c0.4,0.3,0.5,0.7,0.5,1.2v5.6c0,1.5,1.2,2.8,2.8,2.8c14.6,0.1,63.5,0.6,80,0c16.6-0.6,22-2.3,27.8-4.2c1-0.3,1.9-0.6,2.9-0.9c5.7-1.7,7.2-5.5,6-14.6c-0.8-6.2-11.2-8.6-15.1-9.1c-0.1,0-0.3,0-0.4-0.1l-57-21.7c-1.3-0.5-2.7-0.2-3.8,0.7L48.5,66.6c-0.4,0.4-1,0.5-1.5,0.3l-18.6-6.6c-0.4-0.1-0.7-0.5-0.9-0.9c-0.2-0.4-0.1-0.9,0.1-1.3c0.3-0.6,1.2-2.7,0.6-3.9c-0.5-0.9-1.8-1.1-2.9-1.2C25.1,53.1,24.9,53.1,24.7,53.1z"/><path d="M97.9,97.2c-19.7,0-42-1.6-43.8-1.7H19c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h35.1c0,0,0.1,0,0.1,0c0.5,0,52.7,3.7,68.7,0c15.5-3.5,18-4.8,18.2-4.8c0.7-0.4,1.6-0.1,2,0.6c0.4,0.7,0.1,1.6-0.6,2c-0.4,0.2-3,1.5-18.9,5.1C118,96.7,108.3,97.2,97.9,97.2z"/><path d="M48.2,95.5c-0.6,0-1.1-0.3-1.4-0.8c0-0.1-3.1-6.4-8.6-15.1c-5.2-8.2-21.6-9.6-21.7-9.7c-0.8-0.1-1.4-0.8-1.4-1.6c0.1-0.8,0.8-1.4,1.6-1.4c0.7,0.1,18,1.6,24,11c5.6,8.9,8.7,15.2,8.8,15.4c0.4,0.7,0,1.6-0.7,2C48.7,95.4,48.4,95.5,48.2,95.5z"/><path d="M92.7,97.1c-0.4,0-0.8-0.2-1.1-0.5C91,96,91.1,95,91.7,94.5c2.2-2,13.6-12,16.9-12.8c0.8-0.2,2.2-0.4,4.1-0.7c5.6-0.9,16.1-2.6,22.3-5.2c0.8-0.3,1.6,0,2,0.8c0.3,0.8,0,1.6-0.8,2c-6.5,2.8-16.8,4.5-23,5.5c-1.8,0.3-3.2,0.5-3.9,0.7c-1.7,0.4-9.2,6.5-15.6,12.1C93.4,97,93,97.1,92.7,97.1z"/><path d="M101.9,88.7c-22.5,0-62.2-8.4-62.7-8.5c-0.8-0.2-1.3-1-1.2-1.8s1-1.3,1.8-1.2c0.4,0.1,40.9,8.7,62.9,8.4c0,0,0,0,0,0c0.8,0,1.5,0.7,1.5,1.5c0,0.8-0.7,1.5-1.5,1.5C102.5,88.7,102.2,88.7,101.9,88.7z"/><path d="M54,83c-0.5,0-0.9-0.2-1.2-0.6c-0.5-0.7-0.3-1.6,0.4-2.1l17.2-12c0.4-0.3,1-0.4,1.5-0.1c0.1,0,6.2,2.5,25.7,2.7c13.2,0.2,15.7-1.7,16.2-2.1c-0.2-0.6,0.1-1.3,0.7-1.7c0.7-0.4,1.6-0.2,2.1,0.5c0.3,0.6,0.5,1.6,0,2.6c-0.9,1.7-3.9,3.9-18.9,3.7c-16.5-0.2-23.8-1.9-26-2.7L54.8,82.7C54.6,82.9,54.3,83,54,83z M113.8,69.1C113.8,69.1,113.8,69.1,113.8,69.1C113.8,69.1,113.8,69.1,113.8,69.1z"/><path d="M67.1,85.2c-0.5,0-0.9-0.2-1.2-0.6c-0.5-0.7-0.4-1.6,0.3-2.1l16.2-12.1c0.7-0.5,1.6-0.4,2.1,0.3c0.5,0.7,0.4,1.6-0.3,2.1L68,84.9C67.7,85.1,67.4,85.2,67.1,85.2z"/><path d="M78.9,86.9c-0.5,0-0.9-0.2-1.2-0.6c-0.5-0.7-0.3-1.6,0.4-2.1l18.5-13.1c0.7-0.5,1.6-0.3,2.1,0.4c0.5,0.7,0.3,1.6-0.4,2.1L79.7,86.6C79.5,86.8,79.2,86.9,78.9,86.9z"/><path d="M68.7,59.7c-0.3,0-0.7-0.1-1-0.4c-0.6-0.5-0.7-1.5-0.2-2.1l4.8-5.7c0.5-0.6,1.5-0.7,2.1-0.2c0.6,0.5,0.7,1.5,0.2,2.1l-4.8,5.7C69.5,59.5,69.1,59.7,68.7,59.7z"/><path d="M76.2,62.8c-0.3,0-0.7-0.1-0.9-0.3c-0.6-0.5-0.7-1.5-0.2-2.1l4.7-5.9c0.5-0.6,1.5-0.7,2.1-0.2c0.6,0.5,0.7,1.5,0.2,2.1l-4.7,5.9C77.1,62.6,76.7,62.8,76.2,62.8z"/><path d="M84.6,65.6c-0.3,0-0.6-0.1-0.9-0.3c-0.7-0.5-0.8-1.4-0.3-2.1l4.2-5.8c0.5-0.7,1.4-0.8,2.1-0.3c0.7,0.5,0.8,1.4,0.3,2.1L85.8,65C85.5,65.4,85,65.6,84.6,65.6z"/><path d="M91.3,68.7c-0.3,0-0.7-0.1-1-0.4c-0.6-0.5-0.7-1.5-0.2-2.1l5-5.9c0.5-0.6,1.5-0.7,2.1-0.2c0.6,0.5,0.7,1.5,0.2,2.1l-5,5.9C92.1,68.5,91.7,68.7,91.3,68.7z"/></svg>}/>
                <ActivityItem activityvalue={'3'} dec={0} unit={'H'} dec={0} activitytype={'workout time'} icon={<svg fill="#000000" viewBox="0 0 128 128" width="40px" height="40px" fill="rgb(243, 6, 125)">    <path d="M 64 13.5 C 36.2 13.5 13.5 36.2 13.5 64 C 13.5 91.8 36.2 114.5 64 114.5 C 91.8 114.5 114.5 91.8 114.5 64 C 114.5 36.2 91.8 13.5 64 13.5 z M 64 19.5 C 88.5 19.5 108.5 39.5 108.5 64 C 108.5 88.5 88.5 108.5 64 108.5 C 39.5 108.5 19.5 88.5 19.5 64 C 19.5 39.5 39.5 19.5 64 19.5 z M 64 31 C 62.3 31 61 32.3 61 34 L 61 58.800781 C 59.2 59.800781 58 61.8 58 64 C 58 67.3 60.7 70 64 70 C 66.2 70 68.199219 68.8 69.199219 67 L 84 67 C 85.7 67 87 65.7 87 64 C 87 62.3 85.7 61 84 61 L 69.199219 61 C 68.699219 60.1 67.9 59.300781 67 58.800781 L 67 34 C 67 32.3 65.7 31 64 31 z"/></svg>}/>
            </div>
        )     
    };
}

const element = < Activity/ >;

export default connect(null, {} )(Activity);

