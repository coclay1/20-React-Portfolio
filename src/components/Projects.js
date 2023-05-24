import React from "react";


export default function Projects({name, github, image}) {
    return  (
        <div className="card">
            <div className="img-container">
                <img alt={name} src={image}/>
                <a href={github}></a>
            </div>
            <div>
                <a href={github}>{name}</a>
            </div>
        </div>
    )
}