import React from 'react';
import Sticky from './Sticky';

function Work (props){
  return (
    <div className='work'>
      <h1>My Work</h1>
      <h2 className='workTitle'>UI/UX Projects</h2>
      <div className='block'>
        <div className='sticky-container ux-container'>
          <Sticky id="ipro" title='Ipro Tech' text='A redesign of Ipro Tech&#x27;s Product Authorization Manager; an internal tool for sales&nbsp;assistants.'/>
          <Sticky id="shop" title='Kawaii Shop (Coming&nbsp;Soon!)' text='A design of a Japanese eCommerce&nbsp;shop.'/>
        </div>
      </div>
      <h2 className='workTitle'>Websites</h2>
      <div className='block'>
          <div className='sticky-container web-container'>
          <Sticky id="pirates" title='Pirates Booty' text='An interactive promotion full of craft ideas and many opportunities to win sweepstakes entries.'/>
          <Sticky id="starbucks" title='Starbucks - BAYA' text='An instant win promotion with a spin to win game.'/>
          <Sticky id="pepsi" title='Pepsi - Pure Leaf' text='A loyalty program with multiple activities for users to complete.'/>        
          </div> 
        </div>
    </div>
    );
  }
  export default Work;




