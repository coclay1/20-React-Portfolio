
import React from "react";
import projectItems from '../../projects.json'
import Projects from "../Projects";

const styles = {
    display: "flex",
    justifyContent: "space-around"
}

export default function Portfolio() {
    return (
        <div>
            <h2>My Projects</h2>
            <div style={styles}>
                {projectItems.map((project) => {
                    return (
                        <Projects key={project.id} image={project.image} name={project.name} github={project.github}/>
                    )
                })}
            </div>
        </div>
    )
}