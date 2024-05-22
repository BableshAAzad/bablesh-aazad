import React from 'react';
import { Outlet } from 'react-router-dom';
import "./ProjectComponent.css";

function ProjectComponent() {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default ProjectComponent
