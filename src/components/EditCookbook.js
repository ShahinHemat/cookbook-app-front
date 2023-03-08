import React, { useState } from "react";

export function EditCookbook( {cookbook }) {

    // Handling States
    const [cookbook_name, setCookbook_name] = useState(cookbook.cookbook_name);
    const handleEditCookbook_name = (e) => {
        setCookbook_name(e.target.value);
    };

    const [description, setDescription] = useState(cookbook.description);
    const handleEditDescription = (e) => {
        setDescription(e.target.value);
    };

    /* 
    
    Editing the picture should be something that one should be able to do from the profile
    
    const [picture, setPicture] = useState(null);
    const handlePicture = (e) => {
        setPicture(e.target.files[0]);
    }   */

    return (
        <>

            <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${cookbook.cookbook_id}`}>
                Edit
            </button>

            <div class="modal" id={`id${cookbook.cookbook_id}`}>
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-header">

                            <h4 class="modal-title">Edit Cookbook</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>

                        </div>


                        <div class="modal-body">

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


                        <div class="modal-footer">

                            <button type="button" class="btn btn-warning" data-dismiss="modal">Save Changes</button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}