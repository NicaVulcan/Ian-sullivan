import React, { useState } from "react";
import ProjectCard from "../Project-Card";

function ProjectTiles({ ...project }) {

    const [currentProject, setCurrentProject] = useState();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = (project) => {
        setCurrentProject({ ...project });
        setIsModalOpen(!isModalOpen);
    }
    return (
        <div>
            {isModalOpen && (
                <ProjectCard currentProject={currentProject} onClose={toggleModal}></ProjectCard>
            )}
            <div className="project-tile" onClick={() => toggleModal({...project})}>
                <p>{project.title}</p>
            </div>
        </div>

    )
}

export default ProjectTiles;