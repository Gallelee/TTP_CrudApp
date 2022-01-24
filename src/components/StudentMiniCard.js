import React from "react"
import {Link, useParams} from "react-router-dom"


export default function StudentMiniCard(props){

    const studentId = useParams()

    return(
        <Link to={`/Students/${props.id}`}>
                        <div className="mini-student-card">
                            <img src={props.imageUrl}/>
                            <h4>{props.firstName} {props.lastName}</h4>
                        </div>
                    </Link>
    )
}