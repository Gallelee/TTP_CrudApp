import React, { useEffect } from "react"
import Axios from "axios"

export default function AddCampusForm(){

    // Add handle submit!

    return(
        <div id="add-camp-form">
            <form>
                <label>Campus Name</label>
                <input type="text" />
                <input type="submit" value="Add Campus"/>
            </form>
        </div>
    )

}