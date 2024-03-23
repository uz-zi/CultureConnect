
import pic1 from '../../assets/grey.jpeg';
import React, { useState } from 'react';
import axios from 'axios'; // Ensure axios is installed



export default function addblog() {
    const formcontent = {
        display: 'block',
            width: '100%',
            padding: '0.5rem 1rem',
            fontSize: '0.9375rem',
            fontWeight: 400,
            lineHeight: 1.6,
            color: '#29292e',
            backgroundColor: '#fff',
            backgroundClip: 'padding-box',
            border: '1px solid #e5dfe4',
            WebkitAppearance: 'none',
            MozAppearance: 'none',
            appearance: 'none',
            borderRadius: '5px',
      };


      const [blogTitle, setBlogTitle] = useState('');
const [blogContent, setBlogContent] = useState('');
const [titleImage, setTitleImage] = useState(null);
const [contentImage, setContentImage] = useState(null);

const [titleError, setTitleError] = useState('');
const [contentError, setContentError] = useState('');
const [titleImageError, setTitleImageError] = useState('');
const [contentImageError, setContentImageError] = useState('');
    
function displaySelectedImage(event, elementId, setImageState, setErrorState) {
  const selectedImage = document.getElementById(elementId);
  const file = event.target.files[0];

  if (file && !file.type.startsWith('image/')) {
      setErrorState('Please select an image file.');
      return; // Stop further execution
  } else {
      setErrorState(''); // Clear any previous error messages
  }

  if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
          selectedImage.src = e.target.result;
      };

      reader.readAsDataURL(file);
      setImageState(file); // Update the state with the file
  }
}


async function handleSubmit(e) {

  const UserID = (JSON.parse(localStorage.getItem('user'))).id;
  console.log(UserID);
 
  e.preventDefault(); // Prevent default form submission behavior

  // Validation here if needed

  let isValid = true; // Flag to track overall form validity

    // Reset error messages
    setTitleError('');
    setContentError('');
    setTitleImageError('');
    setContentImageError('');

    // Validate title word count
    if (blogTitle.split(' ').filter(Boolean).length < 5) {
        setTitleError('Title must contain at least 5 words.');
        isValid = false;
    }

    // Validate content word count
    if (blogContent.split(' ').filter(Boolean).length < 50) {
        setContentError('Content must contain at least 50 words.');
        isValid = false;
    }

    // Check if any validation failed
    if (!isValid) return;

  const formData = new FormData();
  formData.append('BlogTitle', blogTitle);
  formData.append('blogContent', blogContent);
  formData.append('UserID',UserID);
  if (titleImage) formData.append('Blog_Title_Image', titleImage);
  if (contentImage) formData.append('Blog_Content_Image', contentImage);

  try {
      // Adjust URL as necessary
      const response = await axios.post('http://localhost:5000/native/addblogs', formData, {
          headers: {
              'Content-Type': 'multipart/form-data',
          },
      });

      console.log(response.data); // Handle success
  } catch (error) {
      console.error(error); // Handle error
  }
}
    
return (
  <div style={{ marginTop: '0px', color: '#9b9ca1' }}>
    <div className="container-fluid" style={{ backgroundColor: '#D3D3D3' }}>
      <div className="row">
        <div className="col-12">
          <div className="my-5 text-dark text-center">
            <h3 style={{ fontSize: '38px'}}>ADD BLOG</h3>
            <hr />
          </div>
  
          {/* Added form onSubmit handler here */}
          <form className="file-upload" onSubmit={handleSubmit}>
            <div className="row mb-5 gx-5">
              <div className="col-md-8 mb-5 mb-xxl-0">
                <div className="bg-secondary-soft px-4 py-5 rounded" style={{backgroundColor: 'rgba(208, 212, 217, 0.1)', borderRadius: '5px', paddingTop: '3rem', paddingBottom: '3rem', paddingRight: '1.5rem', paddingLeft: '1.5rem'}}>
                  <div className="row g-3">
                    <h4 className="mb-4 mt-0 text-dark" style={{fontSize: '38px'}}>Blog Content</h4>
                    
                    <div className="col-md-12 text-dark">
                      <label className="form-label">Title <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" style={formcontent} placeholder="Enter Blog Title" value={blogTitle} onChange={(e) => setBlogTitle(e.target.value)}/>
                      {titleError && <div style={{ color: 'red' }}>{titleError}</div>}
                    </div>
                    <div className="col-md-12 text-dark">
                      <label htmlFor="content" className="form-label">Content  <span className="text-danger">*</span></label>
                      <textarea className="form-control" id="content" placeholder="Enter Blog Content" name="content" rows="6" value={blogContent} onChange={(e) => setBlogContent(e.target.value)} required></textarea>
                      {contentError && <div style={{ color: 'red' }}>{contentError}</div>}
                    </div>
                  </div> 
                </div>
              </div>
              <div className="col-md-4">
                <h3 className="mb-4 mt-0 text-center text-dark" style={{fontSize: '38px'}}>Title Picture</h3>
                <div className="mb-4 d-flex justify-content-center">
                  <img id="selectedImage1" src={pic1} alt="example placeholder" style={{ width: '450px', height: '300px' }} />
                </div>
                <div className="d-flex justify-content-center">
                  <div className="btn btn-primary btn-rounded mb-5">
                    <label className="form-label text-white m-1" htmlFor="customFile1">Choose file</label>
                    <input type="file" className="form-control d-none" id="customFile1" onChange={(event) => displaySelectedImage(event, 'selectedImage1', setTitleImage, setTitleImageError)} />
                    {titleImageError && <div style={{ color: 'red' }}>{titleImageError}</div>}
                  </div>
                </div>
              </div>
              <div className="col-xxl-12 mb-5 mb-xxl-0">
                <h4 className="mb-4 mt-5 text-center text-dark" style={{fontSize: '38px'}}>Content Picture</h4>
                <div className="mb-4 d-flex justify-content-center">
                  <img id="selectedImage2" src={pic1} alt="example placeholder" style={{ width: '700px', height: '450px' }} />
                  
                </div>
                <div className="d-flex justify-content-center">
                  <div className="btn btn-primary btn-rounded">
                    <label className="form-label text-white m-1" htmlFor="customFile2">Choose file</label>
                    <input type="file" className="form-control d-none" id="customFile2" onChange={(event) => displaySelectedImage(event, 'selectedImage2', setContentImage, setContentImageError)} />
                    {contentImageError && <div style={{ color: 'red' }}>{contentImageError}</div>}
                  </div>
                </div>
              </div>
            </div>
  
            <hr className="text-dark mx-5" />
            <div className="gap-1 d-md-flex justify-content-md-end text-center">
              <button type="submit" className="btn btn-primary my-5 btn-lg" style={{ backgroundColor: 'blue' }}>Submit Blog</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);
}