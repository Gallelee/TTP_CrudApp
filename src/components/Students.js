import React, { useEffect , useState } from "react"
import ShowStudent from "./ShowStudent"
import Axios from "axios"
import noImage from "../images/noImage.png"

export default function Students(){

    const [allStudents, setAllStudents] = useState(null)


    useEffect(()=>{
        async function getAllStudents(){
            const all = await Axios.get("https://jsonplaceholder.typicode.com/users")
            console.log(all)
            setAllStudents(all)
        }
        getAllStudents()
    }, [])
    return(
        <div id="students">
            {allStudents? allStudents.data
            .map(elm => {
                return(
                    <div className="mini-student-card">
                        <img src={noImage}/>
                        <h4>{elm.name}</h4>
                    </div>
                )
            }) : "Nothing to see here"
        }
            
        </div>
    )
        
}