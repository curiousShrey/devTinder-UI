import React from 'react'

const Resume = ({ resume }) => {
    const viewResumeButtonHandler = () => {
        window.open(resume?.resumeLink, "_blank", "noopener,noreferrer"); 
    }

    return (
        <div className="card bg-base-100 w-64 shadow-xl">
            <figure>
                <img
                    src="data:image/png;base64,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"
                    alt="text-file-image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title overflow-x-auto">{resume.name}</h2>
                <p>{`This is a resume for ${resume?.role} for skills ${resume?.skills}` || "This is a default description."}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={viewResumeButtonHandler}>View</button>
                </div>
            </div>
        </div>
    )
}

export default Resume