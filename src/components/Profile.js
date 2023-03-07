import React from "react"
import { Link } from "react-router-dom"

export function Profile() {

    return (
        <>

            <div>
                I am the Profile component. You will see me when you are logged in.
            </div>

            <div>Logged in as: username</div>

            <h3>My cookbooks</h3>
            <div>List of cookbooks:</div>

            <div>
                <Link to="/createcookbook">New Cookbook</Link>
            </div>

        </>
    )
}