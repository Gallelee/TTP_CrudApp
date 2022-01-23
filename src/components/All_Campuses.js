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
            setAllCampuses(data)
        }

        getCampuses()
    }, [])

    return(
        <div>

            <div id="camp-top">
                <h1 id="campus-head"> All Campuses </h1>
                <button id="add-campus">Add Campus </button>
            </div>

            {/* for loop to be added here */}
            
                {allCampuses? allCampuses.data.campuses.map(item =>{
                    console.log(item.campusID)
                    return (
                        <Link to={`/Campus/${item.campusID}`}>
                        <div className="campus-box">
                            <table className="camp-tbl">
                                <tr>
                                    <td className="camp-img-td">
                                        <img src={item.campusImg} className="camp-img" />
                                    </td>
                                    <td>
                                        <h3 className="camp-name">{item.campusName}  </h3>
                                        <p className="camp-p">{item.enrolled} </p>
                                        <div>
                                            <p className="camp-ed"> <Link to ="/EditCampus">Edit</Link></p>
                                            <button className="camp-del">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        </Link>
                        
                    )
                }) : "No Campuses"}

        </div>
    )

}
