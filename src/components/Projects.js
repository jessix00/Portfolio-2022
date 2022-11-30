import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectDetails from './ProjectDetails';


function Projects (){
  const {id} = useParams()
    return (
      <div className='project' id={id}>
        <ProjectDetails />
    </div>
    );
  
  }
  export default Projects;




