import React, { useState } from "react"
import Axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

export default function EditCampus(){

    const navigate = useNavigate()

    const campusID = useParams()

    const [imageUrl, setImageUrl] = useState(null)

    const handleSubmit = (ev) => {
        ev.preventDefault()
        Axios.patch(`https://ttpcrup-app.herokuapp.com/api/campuses/${campusID.id}`,{
            name: ev.target[0].value,
            address: ev.target[1].value,
            imageUrl: imageUrl? imageUrl : "https://cdn.wallethub.com/wallethub/posts/85332/best-worst-college-towns-in-america.png"
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
        setTimeout(()=>navigate(-1),500)

    }


    const handleImageUrl = (ev) => {
        setImageUrl(ev.target.value)
    }

    return(
        <div id="campus-form">
                <h1>Edit Campus</h1>
                <form onSubmit={handleSubmit}>
                    <label>Campus Name</label>
                    <input type={"text"}/>
                    <label>Campus Location</label>
                    <input type={"text"}/> 
                    <label>Campus Image Url</label>
                    <input type={"text"} onChange={handleImageUrl}/>
                    <label>Campus Description</label>
                    <input type={"text"}/>
                    <input type={"submit"}/>
                </form>
        </div>
    )
}