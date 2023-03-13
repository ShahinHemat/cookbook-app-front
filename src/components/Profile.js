import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { EditCookbook } from "./EditCookbook";

export function Profile() {

    const [allcookbooks, setAllcookbooks] = useState([]);



    // Delete cookbook function
    const deleteCookbook = async (id) => {
        try {
            const confirmed = window.confirm(`Are you sure you want to delete this cookbook?`);

            if (confirmed) {
                const deleteCookbook = await fetch(`http://localhost:3333/cookbooks/${id}`, {
                    method: "DELETE"
                });
                
                setAllcookbooks(allcookbooks.filter(cookbook => cookbook.cookbook_id !== id));
            
            } else {
                return;
            }; 

        } catch (err) {
            console.error(err.message);
        }
    };

    // Fetch cookbooks from database, and list in UI 
    const getAllCookbooks = async () => {
        try {

            const response = await fetch("http://localhost:3333/cookbooks")
            const jsonData = await response.json();

            setAllcookbooks(jsonData);

        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getAllCookbooks();
    }, []);


    return (
        <div>

            <div>
                I am the Profile component. You will see me when you are logged in.
            </div>

            <div>Logged in as: username</div>

            <h2>My cookbooks</h2>

            {allcookbooks.map(cookbook => (

                <div className="allcookbooks-container" key={cookbook.cookbook_id}>

                    <h4>{cookbook.cookbook_name}</h4>
                    <em>{cookbook.description}</em>

                    <>
                        <EditCookbook cookbook={cookbook}/>
                    </>

                    <button
                        style={{ backgroundColor: 'red', color: 'black' }}
                        onClick={() => deleteCookbook(cookbook.cookbook_id)}
                    >
                        Delete
                    </button>

                </div>
            ))}

            <div>
                <Link to="/createcookbook">New Cookbook</Link>
            </div>

        </div>
    )
}