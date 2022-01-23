import React from "react"
import {Link, useParams} from "react-router-dom"
import Axios from "axios"
import { useEffect, useState} from "react" 

export default function All_Campuses(){

    const [allCampuses, setAllCampuses] = useState(null)
    

    const campusId = useParams()

    useEffect(()=>{
        async function getCampuses(){
            const data = await Axios.get("https://my-json-server.typicode.com/evs09/CRUD-App-Placeholder-Data/db")
            console.log(data)
            setAllCampuses(data)
        }

        getCampuses()
    }, [])

    return(
        <div>

            <div id="camp-top">
                <h1 id="campus-head"> All Campuses </h1>
                <button id="add-campus"><Link to="/AddCampus">Add Campus</Link></button>
            </div>
            
                {allCampuses? allCampuses.data.campuses.map(item =>{
                    console.log(item.campusID)
                    return (
                        <div className="campus-box">
                            <table className="camp-tbl">
                                <tr>
                                    <td className="camp-img-td">
                                        <img src={item.campusImg} className="camp-img" />
                                    </td>
                                    <td>
                                        <Link to={`Campus/${item.campusID}`}>
                                            <h3 className="camp-name">{item.campusName}  </h3>
                                        </Link>
                                        <p className="camp-p">{item.enrolled} Student(s) </p>
                                        <div>
                                            <p className="camp-ed"> <Link to="/EditCampus">Edit</Link></p>
                                            <button className="camp-del">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        
                    )
                }) : "No Campuses"}

        </div>
    )

}
