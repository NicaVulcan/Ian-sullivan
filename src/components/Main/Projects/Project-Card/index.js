import React from "react";
import Carousel from "../Carousel";

function ProjectCard({ currentProject, onClose }) {

    const { title, date, description, skills, images } = currentProject
    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-container">
                <h2 className="modal-title">{title} · <span className="modal-date">{date}</span></h2>
                <hr></hr>
                <h3>Project Description:</h3>
                <p>{description}</p>
                <h3>Skills Used:</h3>
                <ul className="modal-skills-list">
                    {skills.map(skill => (<li>{skill}</li>))}
                </ul>
                <h3>Gallery</h3>
                <Carousel images={images}></Carousel>
            </div>
        </div>
    )
}

export default ProjectCard;