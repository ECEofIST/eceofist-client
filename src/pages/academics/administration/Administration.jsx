import React from 'react'
import "./Administration.css"

export default function Administration() {
    return <div className="administration">
        <div className="administrationSource">
            <iframe scrolling='no' src="https://ist.edu.bd/governing-body/" width="100%" height="533" frameborder="0"></iframe>
        </div>
        <div className="administrationSource otherStaffSource">
            <iframe scrolling='no' src="https://ist.edu.bd/others-staff/" width="100%" height="533" frameborder="0"></iframe>
        </div>
    </div>
}
