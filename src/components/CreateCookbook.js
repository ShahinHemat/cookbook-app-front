import React, { useState } from "react";
import { Link } from "react-router-dom";


export function CreateCookbook() {

    // Handling States
    const [cookbook_name, setCookbook_name] = useState('');
    const handleCookbook_name = (e) => {
        setCookbook_name(e.target.value);
    };

    const [description, setDescription] = useState('');
    const handleDescription = (e) => {
        setDescription(e.target.value);
    };

    const [picture, setPicture] = useState(null);
    const handlePicture = (e) => {
        setPicture(e.target.files[0]);
    }

    const handleSaveCookbook = async (e) => {
        e.preventDefault();
        try {
            const body = { cookbook_name, description, picture };
            const response = await fetch("http://localhost:3333/cookbooks", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            window.location = '/profile';

        } catch (err) {
            console.error(err.message);
        }
    };


    return (
        <>

            <div>I am the CreateCoobook component</div>

            <div className="cookbook-details">

                <input
                    type={'text'}
                    placeholder='Name of Cookbook'
                    onChange={handleCookbook_name}
                    value={cookbook_name}
                    minLength={'3'}
                    maxLength={'50'}
                />

                <textarea
                    placeholder="Description"
                    maxLength={'200'}
                    minLength={'3'}
                    cols='30'
                    rows='3'
                    value={description}
                    onChange={handleDescription}
                />

                <div>Upload picture:</div>
                <input
                    type='file'
                    onChange={handlePicture}
                    accept='image/*'
                />

                {picture && (
                    <div>
                        <h3>Preview:</h3>
                        <img src={URL.createObjectURL(picture)} alt='Preview' style={{ maxHeight: '200px', maxWidth: '200px' }} />
                    </div>
                )}

            </div>

            <button
                onClick={handleSaveCookbook}
            >
                Save Cookbook
            </button>

            <div>
                <Link to="/profile">Back to Profile</Link>
            </div>


        </>
    )
}