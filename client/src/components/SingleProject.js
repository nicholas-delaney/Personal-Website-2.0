import React from "react";

function SingleProject(props) {
    return (
        <div className='singleProj'>
            <h3>{props.projName}</h3>
            <p>{props.description}</p>
            <div>
                <a href={props.projLink}>
                    <p className='projLinks'>
                        <strong>Link to running app!</strong>
                        <i className="material-icons">launch</i>
                    </p>
                </a>
                <a href={props.gitLink}>
                    <p className='projLinks'>
                        <strong>Link to GitHub repository</strong>
                        <i className="material-icons">launch</i>
                    </p>
                </a>
            </div>
        </div>
    );
}

export default SingleProject;