import React from "react"
import {Link} from "react-router-dom"


export default function StudentMiniCard(props){

    return(
        <Link to={`${props.studentId}`}>
                        <div className="mini-student-card">
                            <img src={props.studentImg}/>
                            <h4>{props.name}</h4>
                        </div>
                    </Link>
    )
}