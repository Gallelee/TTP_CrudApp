import React from "react"
import {Link, useParams} from "react-router-dom"


export default function StudentMiniCard(props){

    const studentId = useParams()

    return(
        <Link to={`/Students/${props.studentId}`}>
                        <div className="mini-student-card">
                            <img src={props.studentImg}/>
                            <h4>{props.name}</h4>
                            <h3>{props.studentId}</h3>
                        </div>
                    </Link>
    )
}