import React, { useState } from "react";

export function EditCookbook({ cookbook }) {

    // Handling States
    const [cookbook_name, setCookbook_name] = useState(cookbook.cookbook_name);
    const handleEditCookbook_name = (e) => {
        setCookbook_name(e.target.value);
    };

    const [description, setDescription] = useState(cookbook.description);
    const handleEditDescription = (e) => {
        setDescription(e.target.value);
    };


    // Update cookbook function
    const updateCookbook = async e => {
        e.preventDefault();
        try {
            const body = { cookbook_name, description };
            const response = await fetch(`http://localhost:3333/cookbooks/${cookbook.cookbook_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            console.log(response);
            window.location = '/profile';

        } catch (err) {
            console.error(err.message);
        }
    }

    // If you cancel editing, the next time you open the edit-modal, reset values
    const cancelEdit = () => {
        setCookbook_name(cookbook.cookbook_name);
        setDescription(cookbook.description);
    }

    /* 
    
    Editing the picture should be something that one should be able to do from the profile
    
    const [picture, setPicture] = useState(null);
    const handlePicture = (e) => {
        setPicture(e.target.files[0]);
    }   */

    return (
        <>

            <button 
            type="button" 
            className="btn btn-warning" 
            data-toggle="modal" 
            data-target={`#id${cookbook.cookbook_id}`} 
            onClick={cancelEdit}
            >Edit</button>

            <div className="modal" id={`id${cookbook.cookbook_id}`}>
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">

                            <h4 className="modal-title">Edit Cookbook</h4>
                            <button 
                            type="button" 
                            className="close" 
                            data-dismiss="modal"
                            onClick={cancelEdit}
                            >&times;</button>

                        </div>


                        <div className="modal-body">

                            <div className="cookbook-details-edit" style={{ display: 'flex', flexDirection: 'column' }}>

                                <input
                                    type={'text'}
                                    placeholder='Name of Cookbook'
                                    minLength={'3'}
                                    maxLength={'50'}
                                    value={cookbook_name}
                                    onChange={handleEditCookbook_name}
                                />

                                <textarea
                                    placeholder="Description"
                                    maxLength={'200'}
                                    minLength={'3'}
                                    cols='30'
                                    rows='3'
                                    value={description}
                                    onChange={handleEditDescription}
                                />

                                <div>Upload picture:</div>
                                <input
                                    type='file'
                                    accept='image/*'
                                />

                            </div>

                        </div>


                        <div className="modal-footer">

                            <button
                                type="button"
                                className="btn btn-warning"
                                data-dismiss="modal"
                                onClick={e => updateCookbook(e)}
                            >Save Changes</button>

                            <button
                                type="button"
                                className="btn btn-danger"
                                data-dismiss="modal"
                                onClick={cancelEdit}
                            >Close</button>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}