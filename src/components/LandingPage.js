import React, { useEffect, useState } from "react"
import { storage } from '../firebase' 
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { v4 } from "uuid";

// Uploading images tutorial: https://www.youtube.com/watch?v=YOAeBSCkArA&ab_channel=PedroTech

export function LandingPage() {

    const [imageUpload, setImageUpload] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [imageList, setImageList] = useState([]);

    const allCookbookImagesRef = ref(storage, 'cookbooks/');

    const uploadImage = () => {
        if (imageUpload === null) return;
        setImageLoading(true);
        const imageRef = ref(storage, `cookbooks/${imageUpload.name + v4()}`)
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            setImageLoading(false);
            getDownloadURL(snapshot.ref).then((url) => {
                setImageList((prev) => [...prev, url]);
            })
        })
        .catch((err) => {
            setImageLoading(false);
            alert(`Error uploading image: ${err.message}`);
        })
    }

    useEffect(() => {
        listAll(allCookbookImagesRef).then((response) => {
            console.log(response);
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url]);
                })
            })
        });
    },[]);

    return (
        <div>

            <div>
                I am the LandingPage component. You will see me, if you aren't logged in, otherwise, you will be redirected to profile.
            </div>

            <input 
            type='file' 
            onChange={(e) => {setImageUpload(e.target.files[0])}} 
            />

            <button 
            onClick={uploadImage}
            >Save Image</button>

            {imageLoading && 
            <div>Uploading Image</div>
            }

            {imageList.map((url, i) => {
                return (
                    <div style={{width: '500px', display: 'flex', justifyContent:'center'}}>
                    <img src={url} key={i} style={{maxHeight: '200px', maxWidth: '250px'}} />
                    </div>
                )
            })}


        </div>
    )
}