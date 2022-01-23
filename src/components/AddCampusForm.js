import React from "react"
import Axios from "axios"


export default function AddCampus(){



    return(
        <form>
            <label>Campus Name</label>
            <input type="text"/>
            <label>Address</label>
            <input type="text"/>
            <input type="submit"/>
        </form>
    )
}