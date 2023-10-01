import React from "react";

function ProjectCard ({ currentProject, onClose }) {

    const { title, date, description, skills, images } = currentProject
    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-container">
                <h2 className="modal-title">{title} · <span className="modal-date">{date}</span></h2>
                <h3>Project Description:</h3>
                <p>{description}</p>
                <h3>Skills Used:</h3>
                <ul className="modal-skills-list">
                    {skills.map(skill => (<li>{skill}</li>))}
                </ul>
            </div>
        </div>
    )
}

export default ProjectCard;