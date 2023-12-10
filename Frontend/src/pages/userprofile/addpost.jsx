import React, { useState, useRef } from 'react';
import axios from '../../axios';
import greypic from '../../assets/grey.jpeg';
import img1 from '../../assets/door.jpg';
import { useNavigate } from 'react-router-dom';

export default function AddPost() {
  const [description, setDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [fileType, setFileType] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  function displaySelectedFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    const determinedFileType = file.type.startsWith('image') ? 'image' : 'video';

    reader.onload = function (e) {
      if (determinedFileType === 'image') {
        setSelectedImage(e.target.result);
        setSelectedVideo(null);
      } else {
        setSelectedVideo(e.target.result);
        setSelectedImage(null);
      }
      setFileType(determinedFileType);
    };

    reader.readAsDataURL(file);
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const id = (JSON.parse(localStorage.getItem('user'))).id;
    console.log(id);
    const formData = new FormData();
    if (fileType === 'image') {
      formData.append('image', fileInputRef.current.files[0]);
      formData.append('caption', description);
      formData.append('id', id);

      try {
        const response = await axios.post('/user/add_imagepost', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log(response.data);
        if(response.data==="Successfully added record for the uploaded image.")
        {
          navigate('/user/userprofile');
        }
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    } else if (fileType === 'video') {
      formData.append('video', fileInputRef.current.files[0]);
      formData.append('text', description);
      formData.append('id', id);

      try {
        const response = await axios.post('/user/add_videopost', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log(response.data);
        if(response.data==="Successfully added record for the video.")
        {
          navigate('/user/userprofile');
        }
      } catch (error) {
        console.error('Error uploading video:', error);
      }
    }
  };

  const fileInputStyle = {
    display: 'none',
  };

  const previewStyle = {
    width: '500px',
    height: 'auto',
  };

  const formcontentaddpost = {
    display: 'block',
    width: '80%',
    padding: '0.5rem 1rem',
    fontSize: '0.9375rem',
    fontWeight: 400,
    lineHeight: 1.6,
    color: '#29292e',
    marginLeft: '63px',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    border: '1px solid #e5dfe4',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    borderRadius: '5px',
  };

  return (
    <div>
      <div
        className="container-fluid"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="row">
          <div className="col-12 text-center">
            <h1 className='mx-5 my-5 text-light' style={{fontSize: '38px'}}>Add Post</h1>
            <hr className='text-light bg-light'/>
            <form method="post" action="/upload" enctype="multipart/form-data" onSubmit={handleSubmit}>
              <div className='my-5' style={{ border: '1px solid black', marginLeft: '420px', marginRight: '420px', paddingTop: '80px', paddingBottom: '40px', backgroundColor: "#FFFFF0", borderRadius: '5px 5px' }}>
                {(selectedImage || selectedVideo) && (
                  <div className="mb-4 d-flex justify-content-center">
                    {fileType === 'image' && <img src={selectedImage || greypic} alt="Selected" style={previewStyle} />}
                    {fileType === 'video' && (
                      <video controls style={previewStyle}>
                        <source src={selectedVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                )}
                <div className="d-flex justify-content-center">
                  <label className="btn btn-primary btn-rounded m-1" htmlFor="customFile">
                    Choose file
                    <input
                      type="file"
                      className="form-control d-none"
                      id="customFile"
                      accept="image/*,video/*"
                      onChange={displaySelectedFile}
                      style={fileInputStyle}
                      ref={fileInputRef}
                    />
                  </label>
                </div>
                <br /><br />
                <div>
                  <label className="form-label text-center" htmlFor="">
                    <h3><b>Add Description</b></h3> 
                  </label>
                  <input 
                    type="text"
                    className="form-control"
                    style={formcontentaddpost}
                    placeholder="Enter Your Description"
                    aria-label="Description"
                    value={description}
                    onChange={handleDescriptionChange}
                  />
                </div>
                <div className="gap-1 d-md-flex justify-content-md-center text-center">
                  <button type="submit" className="btn btn-primary my-5 btn-lg text-dark">ADD POST</button>
                </div>
              </div>
            </form>
            <br /><br />
          </div>
        </div>
      </div>
    </div>
  );
}
