import React from "react";

function ProjectTiles({ ...project }) {
    console.log(project)
    return (
        <div className="project-tile"><p>{project.title}</p></div>
    )
}

export default ProjectTiles;