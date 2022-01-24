import Axios from "axios"
import React, {useEffect, useState}from "react"
import { useParams, useNavigate } from "react-router-dom"
import noImage from "../images/noImage.png"
import StudentMiniCard from "./StudentMiniCard"


export default function ShowCampuses(){
    const [campus, setCampus] = useState(null)
    const [students, setStudents] = useState(null)

    const navigate = useNavigate()

    const [campStudents, setCampStudents] = useState(null)

    const campusID = useParams()

    useEffect(() => {
        async function getCampus(){
            const camp = await Axios.get(`https://ttpcrup-app.herokuapp.com/api/campuses/${campusID.campusID}`)
            setCampus(camp)
            //console.log(camp)
        }
        getCampus()
    }, [])

    useEffect(()=>{
        async function getAllStudents(){
            const all = await Axios.get("https://ttpcrup-app.herokuapp.com/api/students/") //dummy data from dummy api
            console.log(all)
            setStudents(all)
        }
        getAllStudents()
    }, [])

    
   
    const loadOptions = () => {
        return students.data.map((student) => {
            if(student.campusId != campusID.campusID){
            return <option value={student.id}>{student.firstName} {student.lastName}</option>}
            })
        
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        if(ev.target[0].value != "none"){
            Axios.patch(`https://ttpcrup-app.herokuapp.com/api/students/${ev.target[0].value}`,{
            campusId : campusID.campusID
            }).then(
            navigate(0)
            ).catch(error => {
                console.log(error.message)
            })
        }
        
    }


    //console.log(campusID)
    
    return(
        <div id="campus">
            <div id="campus-page-info">        
                <img className="campus-page-img"src={campus? campus.data.imageUrl : noImage}/>
                <div >
                    <h1>{campus? campus.data.name : "N/A"}</h1>
                    <p>{campus? campus.data.description : "N/A"}</p>

                </div>
            </div>
            <p>{campus? campus.data.address : "No address"}</p>

            <div>
                <form onSubmit={handleSubmit}>
                    <select className="dropdown">
                        <option value="none">Select Student</option>
                        {students && loadOptions()}
                    </select>
                    <button className="submit-btn" type="submit">Add to Campus</button>
                </form>
            </div>

            <h1>Students on Campus</h1>
            <div id="camp-stu-card">
                {campus? campus.data.students.map(elm => <StudentMiniCard id={elm.id} imageUrl={elm.imageUrl} firstName={elm.firstName} lastName={elm.lastName}/>) : "There are no students currently registered to this campus"}
            </div>
        </div>
    )
}