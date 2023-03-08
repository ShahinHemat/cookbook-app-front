import React from "react";

export function EditCookbook() {

    return (
        <>

            <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#myModal">
                Edit
            </button>


            <div class="modal" id="myModal">
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
                                />

                                <textarea
                                    placeholder="Description"
                                    maxLength={'200'}
                                    minLength={'3'}
                                    cols='30'
                                    rows='3'
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